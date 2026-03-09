import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: __dirname + '/.env' });

const app = express();
app.use(cors());
app.use(express.json());

// Servir la carpeta de la aplicación compilada
app.use(express.static(join(__dirname, '../dist')));

const PORT = process.env.PORT || 3001;

// Global structure to hold our EMT access token
let emtToken = null;
let tokenExpirationTime = 0; // Unix timestamp in seconds

const EMT_EMAIL = process.env.EMT_EMAIL;
const EMT_PASSWORD = process.env.EMT_PASSWORD;

/**
 * Perform login to get the access token.
 */
async function getEmtToken() {
    const currentTime = Math.floor(Date.now() / 1000);

    // If we have a token and it hasn't expired (adding 60 seconds buffer)
    if (emtToken && tokenExpirationTime > (currentTime + 60)) {
        return emtToken;
    }

    try {
        console.log('Fetching new EMT token...');
        const response = await axios.get('https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/', {
            headers: {
                'email': EMT_EMAIL,
                'password': EMT_PASSWORD
            }
        });

        if (response.data && response.data.data && response.data.data[0]) {
            emtToken = response.data.data[0].accessToken;
            // tokenSecExpiration might be relative (e.g. valid for 86400 seconds) or absolute.
            // Usually EMT returns something like "tokenSecExpiration": 86400 (which is 24 hours).
            const expirationOffset = response.data.data[0].tokenSecExpiration || 86400;
            tokenExpirationTime = currentTime + expirationOffset;
            console.log('Successfully acquired EMT token.');
            return emtToken;
        } else {
            throw new Error('Invalid response structure from EMT Login');
        }
    } catch (error) {
        console.error('Error fetching EMT token:', error.message);
        throw error;
    }
}

/**
 * Endpoint to fetch BiciMAD stations.
 * Proxy route for the frontend.
 */
app.get('/api/stations', async (req, res) => {
    try {
        const token = await getEmtToken();
        const response = await axios.get('https://openapi.emtmadrid.es/v1/transport/bicimad/stations/', {
            headers: {
                'accessToken': token
            }
        });

        // Check if valid data
        if (response.data && response.data.data) {
            res.json(response.data.data);
        } else {
            res.status(502).json({ error: 'Invalid response from EMT Stations API' });
        }
    } catch (error) {
        console.error('Error fetching BiciMAD data:', error.message);
        res.status(500).json({ error: 'Failed to fetch BiciMAD data' });
    }
});

app.listen(PORT, () => {
    console.log(`EMT Proxy server is running on http://localhost:${PORT}`);
});

app.get(/.*/, (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
});
