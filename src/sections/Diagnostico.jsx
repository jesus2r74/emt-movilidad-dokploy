import React from 'react';
import KPICard from '../components/KPICard';
import BiciMADMap from '../components/BiciMADMap';
import { Bike, TramFront, Smartphone, TrendingUp, AlertTriangle, Info, MapPin } from 'lucide-react';

const KPIS = [
    {
        title: "BiciMAD",
        icon: <Bike size={32} />,
        value: "13,7M viajes",
        badge: "+39% vs 2024",
        badgeColor: "bg-green-100 text-green-700 font-bold",
        subtext: "630 estaciones · 7.700+ bicis · 21 distritos",
        trendIcon: <TrendingUp size={14} />,
        footerText: "Récord histórico: 66.605 viajes en un día (8 sept 2025)",
        delay: 0
    },
    {
        title: "Teleférico",
        icon: <TramFront size={32} />,
        value: "26,26M€ inv.",
        badge: "En renovación",
        badgeColor: "bg-orange-100 text-orange-700 font-bold",
        subtext: "Reapertura prevista: finales 2026 / Q1 2027",
        trendIcon: <AlertTriangle size={14} />,
        footerText: "Cerrado desde 2022 · Cabinas Doppelmayr panorámicas y accesibles",
        delay: 150
    },
    {
        title: "Mobility360",
        icon: <Smartphone size={32} />,
        value: "~94K desc.",
        badge: "Potencial infrautilizado",
        badgeColor: "bg-red-100 text-red-700 font-bold",
        subtext: "App MaaS · Planificador multimodal · Pago integrado",
        trendIcon: <Info size={14} />,
        footerText: "Financiada con 4,45M€ NextGen · Penetración <3% de Madrid",
        delay: 300
    }
];

export default function Diagnostico() {
    return (
        <section id="diagnostico" className="w-full bg-emt-bg py-24 z-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="text-emt-blue font-bold tracking-widest uppercase text-sm mb-3 block">Contexto Estratégico</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-emt-dark mb-4 drop-shadow-sm leading-tight">
                        El Estado de la División
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
                        Para identificar las oportunidades de generación de negocio, primero debemos diagnosticar el terreno de juego actual, sus inercias y sus barreras estructurales.
                    </p>
                </div>

                {/* KPI Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {KPIS.map((kpi, idx) => (
                        <KPICard
                            key={idx}
                            icon={kpi.icon}
                            value={kpi.value}
                            badge={kpi.badge}
                            badgeColor={kpi.badgeColor}
                            subtext={kpi.subtext}
                            trendIcon={kpi.trendIcon}
                            footerText={kpi.footerText}
                            delay={kpi.delay}
                        />
                    ))}
                </div>

                {/* Map Section (BiciMAD) */}
                <div className="mb-24 animate-on-scroll">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-emt-light p-4 rounded-full text-emt-blue inline-flex items-center justify-center">
                            <MapPin size={32} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-display font-bold text-emt-dark">
                                Mapeando el Uso y Saturación en Tiempo Real
                            </h3>
                            <p className="text-gray-500 font-medium">BiciMAD es un gigante logístico de 630 estaciones conectadas por API.</p>
                        </div>
                    </div>

                    <BiciMADMap />
                </div>

                {/* Narrative Columns (Scrollytelling) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-gray-200">

                    {/* BiciMAD Block */}
                    <div className="prose prose-blue flex flex-col items-start gap-4 hover:-mt-2 transition-all group duration-300">
                        <div className="flex items-center gap-3">
                            <Bike className="text-emt-green" size={24} />
                            <h4 className="text-xl font-bold m-0 font-display">El reto de la rentabilidad</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed m-0 group-hover:text-gray-900 transition-colors">
                            El volumen de viajes crece verticalmente (+39% en 2025), pero ¿crece el resultado económico al mismo ritmo? El coste de la licencia PBSC supera 1,6M€/año. El mantenimiento consume más de 1M€ solo en repuestos.
                            <br /><br />
                            La expansión a 21 distritos ha logrado cobertura récord, pero con un ratio de uso menor en la periferia, y los vectores de ingresos alternativos B2B y B2G siguen ignorados.
                        </p>
                    </div>

                    {/* Teleférico Block */}
                    <div className="prose prose-orange flex flex-col items-start gap-4 hover:-mt-2 transition-all group duration-300">
                        <div className="flex items-center gap-3">
                            <TramFront className="text-emt-orange" size={24} />
                            <h4 className="text-xl font-bold m-0 font-display">De nostalgia a puro activo</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed m-0 group-hover:text-gray-900 transition-colors">
                            Se invierten 26,26M€ sin un plan comercial visible. El antiguo era una atracción de muy bajo rendimiento (estimación 1-2M€/año).
                            <br /><br />
                            Las nuevas cabinas de 10 pasajeros panorámicas abren la puerta a algo que nunca tuvo: un <strong>plan de revenue management real</strong> (turismo premium, gastronomía, y mercado corporativo) indispensable para amortizar esos 26 millones.
                        </p>
                    </div>

                    {/* Mobility360 Block */}
                    <div className="prose flex flex-col items-start gap-4 hover:-mt-2 transition-all group duration-300">
                        <div className="flex items-center gap-3">
                            <Smartphone className="text-emt-red" size={24} />
                            <h4 className="text-xl font-bold m-0 font-display text-gray-800">La interfaz dormida</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed m-0 group-hover:text-gray-900 transition-colors">
                            Con menos del 3% de penetración en la ciudad (94.000 descargas), el desafío que enfrenta no es técnico; es un problema de <strong>posicionamiento frente a Google Maps</strong>.
                            <br /><br />
                            Su potencial real estriba no en ser un planificador más, sino en evolucionar como el primer <em>market-place</em> integral de la movilidad madrileña para monetizar datos de valor y fidelidad MaaS.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
