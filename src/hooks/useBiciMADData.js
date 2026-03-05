import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch and provide BiciMAD stations data.
 * @returns {Object} { data, loading, error, getAggregatedStats }
 */
export function useBiciMADData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let unmounted = false;

        async function fetchData() {
            try {
                setLoading(true);
                // Call our internal proxy server
                const response = await axios.get('/api/stations');
                if (!unmounted) {
                    setData(response.data || []);
                    setError(null);
                }
            } catch (err) {
                if (!unmounted) {
                    console.error('Error fetching BiciMAD data from proxy:', err);
                    setError('No fue posible conectar con los servicios en tiempo real de BiciMAD. Mostrando última instantánea de red.');
                    // TODO: Implement fallback to static JSON file if API fails
                    setData([]);
                }
            } finally {
                if (!unmounted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        // Optionally set an interval to refresh data (e.g. every 2 minutes)
        const intervalId = setInterval(fetchData, 120000);

        return () => {
            unmounted = true;
            clearInterval(intervalId);
        };
    }, []);

    /**
     * Helper function to calculate aggregate statistics
     */
    const getAggregatedStats = () => {
        if (!data || data.length === 0) return null;

        let totalBikesAvailable = 0;
        let emptyStations = 0;
        let fullStations = 0;
        const districtGroups = {}; // We can map and classify but EMT API doesn't return district explicitly per station

        data.forEach(station => {
            // EMT specific logic
            // Only process active stations (light === 1 or != 0)
            if (station.light !== 0 && station.no_available !== 1) {
                const bikes = Number(station.dock_bikes) || 0;
                const freeBases = Number(station.free_bases) || 0;

                totalBikesAvailable += bikes;

                if (bikes === 0) emptyStations++;
                if (freeBases === 0) fullStations++;
            }
        });

        return {
            totalStations: data.length,
            totalBikesAvailable,
            emptyStations,
            fullStations
        };
    };

    return { data, loading, error, getAggregatedStats };
}
