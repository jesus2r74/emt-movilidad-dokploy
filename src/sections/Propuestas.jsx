import React, { useState } from 'react';
import SimulatorBiciMADBusiness from '../components/Simulator';
import { Briefcase, Map, Mountain, Lightbulb, Users, Leaf, ArrowRight, Smartphone } from 'lucide-react';

const TelefericoSimulator = () => {
    const [days, setDays] = useState(300);
    const [visitorsN1, setVisitorsN1] = useState(800);
    const [visitorsN2, setVisitorsN2] = useState(400);
    const [visitorsN3, setVisitorsN3] = useState(150);
    const [visitorsN4, setVisitorsN4] = useState(50);
    const [visitorsN5, setVisitorsN5] = useState(100);

    const N1_PRICE = 9;   // Estándar
    const N2_PRICE = 25;  // VIP Express (Sunset Toast)
    const N3_PRICE = 45;  // Gastronómico Terminal
    const N4_PRICE = 40;  // Eventos / Corporativo (avg x persona)
    const N5_PRICE = 22;  // Paquete Mobility360

    const calculateRevenue = () => {
        const revN1 = days * visitorsN1 * N1_PRICE;
        const revN2 = days * visitorsN2 * N2_PRICE;
        const revN3 = days * visitorsN3 * N3_PRICE;
        const revN4 = days * visitorsN4 * N4_PRICE;
        const revN5 = days * visitorsN5 * N5_PRICE;
        const total = revN1 + revN2 + revN3 + revN4 + revN5;
        return { revN1, revN2, revN3, revN4, revN5, total };
    };

    const results = calculateRevenue();
    const formatEuros = (num) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 mt-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-3 bg-emt-orange/10 text-emt-orange rounded-lg">
                    <Mountain size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-display font-bold text-emt-dark">
                        Simulador de Revenue Management (Teleférico)
                    </h3>
                    <p className="text-sm text-gray-500">Proyección por segmento / Nivel de Experiencia</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-xs font-bold text-gray-700">Días de Operación / Año</label>
                            <span className="text-sm font-bold text-emt-orange">{days} días</span>
                        </div>
                        <input type="range" min="250" max="340" step="5" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full accent-emt-orange h-1.5 bg-gray-200 rounded-lg appearance-none" />
                    </div>

                    <div className="pt-2">
                        <div className="flex justify-between mb-1">
                            <label className="text-xs font-bold text-gray-700 hover:text-emt-blue transition-colors">Visitantes/día Nivel 1 (Estándar 9€)</label>
                            <span className="text-xs font-bold">{visitorsN1} pax/día</span>
                        </div>
                        <input type="range" min="300" max="2500" step="50" value={visitorsN1} onChange={(e) => setVisitorsN1(Number(e.target.value))} className="w-full accent-emt-blue h-1.5 bg-gray-200 rounded-lg appearance-none" />
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-xs font-bold text-gray-700 hover:text-purple-600 transition-colors">Visitantes/día Nivel 2 (VIP Express 25€)</label>
                            <span className="text-xs font-bold">{visitorsN2} pax/día</span>
                        </div>
                        <input type="range" min="50" max="1000" step="25" value={visitorsN2} onChange={(e) => setVisitorsN2(Number(e.target.value))} className="w-full accent-purple-600 h-1.5 bg-gray-200 rounded-lg appearance-none" />
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-xs font-bold text-gray-700 hover:text-amber-700 transition-colors">Visitantes Nivel 3 (Gastronómico Terminal 45€)</label>
                            <span className="text-xs font-bold">{visitorsN3} pax/día</span>
                        </div>
                        <input type="range" min="10" max="500" step="10" value={visitorsN3} onChange={(e) => setVisitorsN3(Number(e.target.value))} className="w-full accent-amber-700 h-1.5 bg-gray-200 rounded-lg appearance-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex justify-between mb-1">
                                <label className="text-[10px] font-bold text-gray-700 truncate w-24">Corporativo (40€)</label>
                                <span className="text-[10px] font-bold">{visitorsN4} pax</span>
                            </div>
                            <input type="range" min="10" max="200" step="10" value={visitorsN4} onChange={(e) => setVisitorsN4(Number(e.target.value))} className="w-full accent-gray-700 h-1.5 bg-gray-200 rounded-lg appearance-none" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <label className="text-[10px] font-bold text-gray-700 truncate w-24">Pack EMT MaaS (22€)</label>
                                <span className="text-[10px] font-bold">{visitorsN5} pax</span>
                            </div>
                            <input type="range" min="10" max="300" step="10" value={visitorsN5} onChange={(e) => setVisitorsN5(Number(e.target.value))} className="w-full accent-emt-green h-1.5 bg-gray-200 rounded-lg appearance-none" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl flex flex-col justify-center border border-gray-100">
                    <div className="mb-4">
                        <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">Revenue Total Proyectado</p>
                        <p className="text-4xl md:text-5xl font-display font-bold text-emt-orange flex items-center gap-2">
                            {results.total > 1000000 ? (results.total / 1000000).toFixed(2) + ' M€' : formatEuros(results.total)}
                        </p>
                    </div>

                    <div className="space-y-2 text-sm mt-4">
                        <div className="flex justify-between items-center"><span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emt-blue"></span> Estándar</span> <span className="font-bold">{formatEuros(results.revN1)}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-600"></span> VIP Express</span> <span className="font-bold">{formatEuros(results.revN2)}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-700"></span> Gastronómico Term.</span> <span className="font-bold">{formatEuros(results.revN3)}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-700"></span> Corporativo</span> <span className="font-bold">{formatEuros(results.revN4)}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emt-green"></span> Pack Mobility360</span> <span className="font-bold">{formatEuros(results.revN5)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Propuestas() {
    return (
        <section id="propuestas" className="w-full bg-white py-24 z-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <span className="text-emt-blue font-bold tracking-widest uppercase text-sm mb-3 block">Hojas de Ruta</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-emt-dark mb-4 drop-shadow-sm leading-tight">
                        Las Oportunidades
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed text-balance">
                        Pasar del diagnóstico a la ejecución. Presentamos 3 iniciativas estratégicas escalables diseñadas para diversificar y monetizar los activos infrautilizados de la División.
                    </p>
                </div>

                {/* Propuesta A: BiciMAD Business */}
                <div className="mb-28">
                    <div className="flex flex-col md:flex-row gap-12 items-start mb-10">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emt-green/10 text-emt-green text-xs font-bold uppercase rounded-full tracking-wider mb-4 border border-emt-green/20">
                                <Leaf size={14} /> Propuesta A
                            </div>
                            <h3 className="text-3xl font-display font-bold text-emt-dark mb-4">
                                BiciMAD Business.<br />Programa de Movilidad Corporativa.
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                <strong>El problema:</strong> El RD 4/2023 obliga a empresas de +500 empleados a crear planes de movilidad sostenible, pero EMT no tiene un producto corporativo (B2B).
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-gray-600 items-start">
                                    <Briefcase className="text-emt-blue shrink-0 mt-1" size={20} />
                                    <span><strong>Modelo SaaS:</strong> Las empresas contratan paquetes (Starter, Business, Enterprise) pagando un <em>fee</em> mensual recurrente en función de los empleados registrados.</span>
                                </li>
                                <li className="flex gap-3 text-gray-600 items-start">
                                    <Leaf className="text-emt-green shrink-0 mt-1" size={20} />
                                    <span><strong>Dashboards ESG:</strong> EMT certifica el ahorro de huella de carbono real de los desplazamientos, añadiendo valor crítico para los reportes no-financieros obligatorios.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <img
                                src=\"/bicimad_corporate.png\"
                                alt=\"BiciMAD Corporate\"
                                className=\"rounded-xl shadow-xl border border-gray-100 object-cover h-[350px] w-full object-top\"
                            />
                        </div>
                    </div>

                    {/* Simulador B2B */}
                    <SimulatorBiciMADBusiness />
                </div>


                {/* Propuesta B: BiciMAD Metropolitan */}
                <div className=\"mb-28 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden\">

                    <div className=\"flex flex-col md:flex-row gap-12 relative z-10\">
                        <div className=\"md:w-1/2\">
                            <div className=\"inline-flex items-center gap-2 px-3 py-1 bg-emt-blue/10 text-emt-blue text-xs font-bold uppercase rounded-full tracking-wider mb-4 border border-emt-blue/20\">
                                <Map size={14} /> Propuesta B
                            </div>
                            <h3 className=\"text-3xl font-display font-bold text-emt-dark mb-4\">
                                BiciMAD Metropolitan.<br />BaaS (BiciMAD as a Service) para Ayuntamientos.
                            </h3>
                            <p className=\"text-gray-600 mb-6 text-lg\">
                                La expansión a Pozuelo no debería ser una <em>rara avis</em>, sino la génesis de un producto franquiciable llave en mano (B2G) para todos los municipios limítrofes.
                            </p>
                            <div className=\"bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6\">
                                <h4 className=\"font-bold text-emt-dark mb-3 flex items-center gap-2\"><Map className=\"text-emt-blue\" size={18} /> Paquetes Estandarizados B2G</h4>
                                <table className=\"w-full text-sm text-left\">
                                    <thead>
                                        <tr className=\"border-b border-gray-200\">
                                            <th className=\"py-2 text-gray-500\">Tier</th>
                                            <th className=\"py-2 text-gray-500\">Estaciones</th>
                                            <th className=\"py-2 text-gray-500\">Población (hab.)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=\"border-b border-gray-50\">
                                            <td className=\"py-2 font-bold text-gray-800\">S (Small)</td>
                                            <td className=\"py-2 text-gray-600\">15 - 20</td>
                                            <td className=\"py-2 text-gray-600\">{\"{'> 50.000'}\"}</td>
                                        </tr>
                                        <tr className=\"border-b border-gray-50\">
                                            <td className=\"py-2 font-bold text-gray-800\">M (Mid)</td>
                                            <td className=\"py-2 text-gray-600\">25 - 40</td>
                                            <td className=\"py-2 text-gray-600\">50k - 150k</td>
                                        </tr>
                                        <tr>
                                            <td className=\"py-2 font-bold text-gray-800\">L (Large)</td>
                                            <td className=\"py-2 text-gray-600\">40 - 60</td>
                                            <td className=\"py-2 text-gray-600\">{\"{'> 150.000'}\"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className=\"text-sm text-gray-500\"><strong>El Modelo Económico:</strong> El municipio financia las estaciones (CAPEX fijado en su suelo público). EMT despliega las bicis, licencias y sistema bajo un único <em>fee annual.</em></p>
                        </div>

                        <div className=\"md:w-1/2 flex flex-col justify-center gap-4\">
                            <div className=\"bg-white p-4 rounded-xl border border-green-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-emt-green transition-all\">
                                <div>
                                    <p className=\"font-bold text-gray-800 text-lg\">Pozuelo de Alarcón</p>\n                                    <p className=\"text-xs text-gray-500\">88.000 hab. · Continuidad Urbana M-40</p>\n                                </div>\n                                <span className=\"text-xs font-bold text-white bg-emt-green px-2 py-1 rounded\">✅ Confirmado</span>\n                            </div>\n                            <div className=\"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-all\">\n                                <div>\n                                    <p className=\"font-bold text-gray-800 text-lg\">Alcobendas / S.S. Reyes</p>\n                                    <p className=\"text-xs text-gray-500\">~210.000 hab. (Polo Norte)</p>\n                                </div>\n                                <span className=\"text-xs font-bold text-emt-orange bg-orange-100 px-2 py-1 rounded\">Alta Prioridad</span>\n                            </div>\n                            <div className=\"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between opacity-80 hover:opacity-100 transition-all\">\n                                <div>\n                                    <p className=\"font-bold text-gray-800 text-lg\">Getafe / Leganés</p>\n                                    <p className=\"text-xs text-gray-500\">~375.000 hab. (Polo Sur M-45)</p>\n                                </div>\n                                <span className=\"text-xs font-bold text-emt-blue bg-blue-100 px-2 py-1 rounded\">Fase 2 Prospectiva</span>\n                            </div>\n                            <div className=\"bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between opacity-50 hover:opacity-100 transition-all\">\n                                <div>\n                                    <p className=\"font-bold text-gray-800 text-lg\">Las Rozas / Majadahonda</p>\n                                    <p className=\"text-xs text-gray-500\">~173.000 hab. (A-6)</p>\n                                </div>\n                                <span className=\"text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded\">Estudio Previsto</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                {/* Propuesta C: Teleférico Experience */}\n                <div>\n                    <div className=\"flex flex-col md:flex-row-reverse gap-12 items-start mb-10\">\n                        <div className=\"md:w-1/2\">\n                            <div className=\"inline-flex items-center gap-2 px-3 py-1 bg-emt-orange/10 text-emt-orange text-xs font-bold uppercase rounded-full tracking-wider mb-4 border border-emt-orange/20\">\n                                <Lightbulb size={14} /> Propuesta C\n                            </div>\n                            <h3 className=\"text-3xl font-display font-bold text-emt-dark mb-4\">\n                                Teleférico Experience.<br />Nuevo Pricing y Posicionamiento.\n                            </h3>\n                            <p className=\"text-gray-600 mb-6 text-lg\">\n                                26 millones invertidos obligan a transformar una atracción nostálgica en un <strong>activo turístico premium</strong> a la altura europea, estratificando el producto para maximizar el retorno de inversión.\n                            </p>\n                            <ul className=\"space-y-4 mb-8 text-sm\">\n                                <li className=\"flex gap-3 text-gray-700 items-center bg-gray-50 p-3 rounded-lg border border-gray-100\">\n                                    <span className=\"w-8 h-8 rounded bg-white font-bold text-emt-blue flex items-center justify-center shrink-0 shadow-sm\">N1</span>\n                                    <span><strong>General (Target Local):</strong> ~9€/10€. Precio base de acceso ida/vuelta.</span>\n                                </li>\n                                <li className=\"flex gap-3 text-gray-700 items-center bg-gray-50 p-3 rounded-lg border border-gray-100\">\n                                    <span className=\"w-8 h-8 rounded bg-white font-bold text-purple-600 flex items-center justify-center shrink-0 shadow-sm\">N2</span>\n                                    <span><strong>VIP Express (Sunset Toast):</strong>  ~25€. \"Fast-pass\" sin colas + Copa de Champagne In-Cabin (aprovechando los 22 min. de I/V en exclusiva).</span>\n                                </li>\n                                <li className=\"flex gap-3 text-gray-700 items-center bg-gray-50 p-3 rounded-lg border border-gray-100\">\n                                    <span className=\"w-8 h-8 rounded bg-white font-bold text-amber-700 flex items-center justify-center shrink-0 shadow-sm\">N3</span>\n                                    <span><strong>Gastronómico/Eventos:</strong> ~45€. Ticket combinado: Cabina VIP + Evento/Cena en la terminal (restaurante).</span>\n                                </li>\n                            </ul>\n                        </div>\n                        <div className=\"md:w-1/2 w-full\">\n                            <img\n                                src=\"/teleferico.png\"\n                                alt=\"Teleferico Premium Concept\"\n                                className=\"rounded-xl shadow-xl border border-gray-100 object-cover h-[450px] w-full\"\n                            />\n                        </div>\n                    </div>\n\n                    <TelefericoSimulator />\n                </div>\n\n                {/* Propuesta D: Mobility360 Marketplace */}\n                <div className=\"mt-28\">\n                    <div className=\"flex flex-col md:flex-row gap-12 items-start mb-10\">\n                        <div className=\"md:w-1/2\">\n                            <div className=\"inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase rounded-full tracking-wider mb-4 border border-purple-200\">\n                                <Smartphone size={14} /> Propuesta D\n                            </div>\n                            <h3 className=\"text-3xl font-display font-bold text-emt-dark mb-4\">\n                                Mobility360 Marketplace.<br />Monetización de Última Milla.\n                            </h3>\n                            <p className=\"text-gray-600 mb-6 text-lg\">\n                                Convertir el gasto en infraestructura digital (App) en un <strong>centro de beneficio (Centro de Ingresos)</strong> asumiendo el rol oficial de <em>Booking.com</em> o <em>Amazon</em> de la movilidad compartida de Madrid.\n                            </p>\n                            <ul className=\"space-y-4 mb-8\">\n                                <li className=\"flex gap-3 text-gray-600 items-start bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm\">\n                                    <span className=\"w-8 h-8 rounded bg-white font-bold text-purple-600 flex items-center justify-center shrink-0 shadow-sm\">1</span>\n                                    <div>\n                                        <strong className=\"block text-gray-900 mb-1\">Integración Premium \"Book & Pay\"</strong>\n                                        Permitir al usuario no solo \"ver\", sino alquilar los patinetes o motos privadas directamente sin salir ni registrarse en la app del operador.\n                                    </div>\n                                </li>\n                                <li className=\"flex gap-3 text-gray-600 items-start bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm\">\n                                    <span className=\"w-8 h-8 rounded bg-white font-bold text-emt-blue flex items-center justify-center shrink-0 shadow-sm\">2</span>\n                                    <div>\n                                        <strong className=\"block text-gray-900 mb-1\">Revenue Share (El Take Rate)</strong>\n                                        En base a acuerdos B2B, EMT comisiona un % fijo estándar (5%-12%) por cada viaje de un ciudadano en flota privada iniciado desde la app pública debido a la aportación de dicho tráfico cualificado.\n                                    </div>\n                                </li>\n                                <li className=\"flex gap-3 text-gray-600 items-start bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm\">\n                                    <span className=\"w-8 h-8 rounded bg-white font-bold text-emt-green flex items-center justify-center shrink-0 shadow-sm\">3</span>\n                                    <div>\n                                        <strong className=\"block text-gray-900 mb-1\">B2B Mobility Wallet Corporativo</strong>\n                                        El complemento para grandes consultoras (HR). Crean cuentas a empleados con un saldo gestionado por RRHH de 50€/mes gastables en todo el mix intermodal disponible en la app bajo un único proveedor (EMT).\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div className=\"md:w-1/2 w-full\">\n                            <img\n                                src=\"/mobility360.png\"\n                                alt=\"Mobility360 Mockup\"\n                                className=\"rounded-xl shadow-xl border border-gray-100 object-cover h-[500px] w-full\"\n                            />\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </section>\n    );\n}