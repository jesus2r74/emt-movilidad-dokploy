import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';
import { Target } from 'lucide-react';

const data = [
    {
        year: '2027',
        Business: 800000,
        Metropolitan: 500000,
        Teleferico: 1500000,
        MaaS: 150000
    },
    {
        year: '2028',
        Business: 1500000,
        Metropolitan: 1200000,
        Teleferico: 2200000,
        MaaS: 400000
    },
    {
        year: '2029',
        Business: 2400000,
        Metropolitan: 1800000,
        Teleferico: 3000000,
        MaaS: 800000
    }
];

export default function Impacto() {
    const formatYAxis = (tickItem) => {
        return `${(tickItem / 1000000).toFixed(1)} M€`;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const total = payload.reduce((sum, entry) => sum + entry.value, 0);
            return (
                <div className="bg-white p-4 border border-gray-100 shadow-xl rounded-lg font-sans">
                    <p className="font-bold text-lg mb-2 border-b border-gray-100 pb-2">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="text-sm font-medium flex justify-between gap-4 mb-1">
                            <span>{entry.name}:</span>
                            <span>{(entry.value / 1000000).toFixed(2)} M€</span>
                        </p>
                    ))}
                    <p className="font-bold text-gray-800 border-t border-gray-100 pt-2 mt-2 flex justify-between gap-4">
                        <span>TOTAL:</span>
                        <span>{(total / 1000000).toFixed(2)} M€</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <section id="impacto" className="w-full bg-white py-24 z-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="text-emt-blue font-bold tracking-widest uppercase text-sm mb-3 block">Business Case</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-emt-dark mb-4 drop-shadow-sm leading-tight">
                        La Visión a 3 Años
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed text-balance">
                        Proyección de ingresos adicionales ("nuevos ingresos") generados mediante la diversificación de producto y la entrada en B2B y B2G, frente a la línea base actual de la división.
                    </p>
                </div>

                {/* Chart Container */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10 max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                        <div className="p-3 bg-emt-blue/10 text-emt-blue rounded-lg">
                            <Target size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-display font-bold text-gray-800">
                                Proyección de Revenue Adicional Consolidado
                            </h3>
                            <p className="text-sm text-gray-500">Excluye negocio core actual (Autobuses y Operativa BiciMAD base)</p>
                        </div>
                    </div>

                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontFamily: 'Inter', fontWeight: 600, fill: '#6b7280' }} dy={10} />
                                <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fontFamily: 'Inter', fontSize: 13, fill: '#9ca3af' }} dx={-10} />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f9fafb' }} />
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px', fontFamily: 'Inter', fontSize: '13px' }} />

                                <Bar dataKey="Teleferico" name="Teleférico Experience" stackId="a" fill="#F39C12" radius={[0, 0, 4, 4]} animationDuration={2000} />
                                <Bar dataKey="Metropolitan" name="BiciMAD Metropolitan (B2G)" stackId="a" fill="#0072CE" animationDuration={2000} />
                                <Bar dataKey="Business" name="BiciMAD Business (B2B)" stackId="a" fill="#2ECC71" animationDuration={2000} />
                                <Bar dataKey="MaaS" name="Mobility360 Marketplace" stackId="a" fill="#9B59B6" radius={[4, 4, 0, 0]} animationDuration={2000} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Closing Narrative */}
                <div className="mt-12 bg-emt-light/40 border-l-4 border-emt-blue p-6 md:p-8 rounded-r-xl max-w-4xl mx-auto text-gray-700 leading-relaxed font-medium">
                    <p className="mb-4">
                        Estas cuatro iniciativas estratégicas están diseñadas para generar <strong>hasta 8 millones de euros anuales adicionales</strong> para la División en el trienio 2027-2029, operando con una inversión marginal sobre infraestructuras ya construidas.
                    </p>
                    <p>
                        A diferencia del modelo tradicional, el crecimiento no depende de una sola fuente centralizada. El <strong>Teleférico Premium (~3M€)</strong> aporta ingresos turísticos de alto margen, mientras que las agresivas líneas B2B y B2G de <strong>BiciMAD y Mobility360 aportan ingresos SaaS (recurrentes) estructurales</strong> que desestacionalizan, atomizan el riesgo y escalan la rentabilidad.
                    </p>
                    <p className="mt-4 text-xs text-gray-500 font-normal italic">
                        Nota: Proyecciones estimativas basadas en datos públicos y benchmarks del sector; sujetas a validación mediante el cruce con los datos internos OPEX/CAPEX de EMT en la Fase 0 del plan.
                    </p>
                </div>

            </div>
        </section>
    );
}
