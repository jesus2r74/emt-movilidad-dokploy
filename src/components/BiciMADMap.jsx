import React, { useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useBiciMADData } from '../hooks/useBiciMADData';
import { AlertCircle, RefreshCw, Bike, MapPin } from 'lucide-react';

const COLOR_HIGH = '#2ECC71';
const COLOR_MEDIUM = '#F39C12';
const COLOR_LOW = '#E74C3C';
const COLOR_INACTIVE = '#95A5A6';

const CENTER_MADRID = [40.4168, -3.7038];

function MarkerWithColor({ station, getColor }) {
    if (!station.geometry || !station.geometry.coordinates || station.geometry.coordinates.length < 2) return null;
    const lng = station.geometry.coordinates[0];
    const lat = station.geometry.coordinates[1];
    const color = getColor(station);

    return (
        <CircleMarker
            center={[lat, lng]}
            pathOptions={{ color, fillColor: color, fillOpacity: 0.8, weight: 1 }}
            radius={6}
        >
            <Popup className="custom-popup">
                <div className="font-sans text-sm min-w-[200px]">
                    <h3 className="font-bold text-emt-dark text-base mb-1 border-b border-gray-200 pb-1">
                        {station.name}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 flex items-start gap-1">
                        <MapPin size={12} className="mt-[2px]" />
                        {station.address}
                    </p>

                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded mb-2">
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-bold text-emt-blue">{station.dock_bikes}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wide flex items-center gap-1">
                                <Bike size={12} /> Disponibles
                            </span>
                        </div>

                        <div className="h-6 border-l border-gray-300 mx-2"></div>

                        <div className="flex flex-col items-center">
                            <span className="text-xl font-bold text-gray-700">{station.free_bases}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wide">
                                Anclajes
                            </span>
                        </div>
                    </div>

                    {station.light === 0 && (
                        <p className="text-xs text-emt-red mt-2 font-medium flex items-center gap-1">
                            <AlertCircle size={12} /> Estación inactiva o sin conexión
                        </p>
                    )}
                </div>
            </Popup>
        </CircleMarker>
    );
}

export default function BiciMADMap() {
    const { data, loading, error, getAggregatedStats } = useBiciMADData();

    const getColor = (station) => {
        if (station.light === 0) return COLOR_INACTIVE;
        const total = station.total_bases || 0;
        const bikes = station.dock_bikes || 0;

        if (total === 0) return COLOR_INACTIVE;
        const ratio = bikes / total;

        if (ratio > 0.6) return COLOR_HIGH;
        if (ratio >= 0.3 && ratio <= 0.6) return COLOR_MEDIUM;
        return COLOR_LOW;
    };

    const MemoizedMarkers = useMemo(() => {
        if (!data) return null;
        return data.map((station) => (
            <MarkerWithColor key={station.id} station={station} getColor={getColor} />
        ));
    }, [data]);

    const stats = useMemo(() => getAggregatedStats(), [data, getAggregatedStats]);

    return (
        <div className="flex flex-col md:flex-row h-[70vh] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="md:w-1/3 bg-gray-50 p-6 flex flex-col justify-center border-r border-gray-200 order-2 md:order-1">
                <h2 className="text-2xl font-display font-bold text-emt-dark mb-6 flex items-center gap-2">
                    <Bike className="text-emt-blue" size={28} />
                    Red en Tiempo Real
                </h2>

                {loading ? (
                    <div className="flex items-center justify-center h-48 flex-col gap-4">
                        <RefreshCw className="animate-spin text-emt-blue" size={32} />
                        <span className="text-gray-500">Conectando con EMT Madrid...</span>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 p-4 rounded-lg flex items-start gap-3">
                        <AlertCircle className="text-red-500 mt-1" size={20} />
                        <span className="text-red-700 text-sm leading-relaxed">{error}</span>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <p className="text-sm text-gray-500 font-medium mb-1">Bicicletas disponibles ahora</p>
                            <p className="text-4xl font-display font-bold text-emt-blue">
                                {stats?.totalBikesAvailable?.toLocaleString('es-ES') || 0}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-2 text-emt-red">
                                    <AlertCircle size={16} />
                                    <p className="text-xs font-bold uppercase tracking-wide">Sin Bicis</p>
                                </div>
                                <p className="text-3xl font-display font-bold text-gray-800">{stats?.emptyStations || 0}</p>
                                <p className="text-xs text-gray-400 mt-1">Estaciones vacías</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-2 text-emt-orange">
                                    <div className="w-4 h-4 rounded-full bg-emt-orange"></div>
                                    <p className="text-xs font-bold uppercase tracking-wide">Saturadas</p>
                                </div>
                                <p className="text-3xl font-display font-bold text-gray-800">{stats?.fullStations || 0}</p>
                                <p className="text-xs text-gray-400 mt-1">Sin anclajes libres</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider">Leyenda de Disponibilidad</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emt-green inline-block"></span> Alta ({">"}60%)</li>
                                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emt-orange inline-block"></span> Media (30% - 60%)</li>
                                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emt-red inline-block"></span> Baja ({"<"}30%)</li>
                                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span> Inactiva / Error</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            <div className="md:w-2/3 h-full min-h-[400px] relative order-1 md:order-2">
                {loading && data && data.length > 0 && (
                    <div className="absolute top-4 right-4 z-[1000] bg-white text-xs px-3 py-2 rounded-full shadow-md flex items-center gap-2 font-bold text-emt-blue">
                        <RefreshCw size={14} className="animate-spin" /> Actualizando...
                    </div>
                )}

                <MapContainer
                    center={CENTER_MADRID}
                    zoom={13}
                    style={{ height: '100%', width: '100%', zIndex: 1 }}
                    zoomControl={true}
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    {MemoizedMarkers}
                </MapContainer>
            </div>
        </div>
    );
}
