import React from 'react';
import { Bike, ShieldCheck, Leaf, Users, FileDown, AreaChart, BarChart3, TrendingUp, ArrowDown } from 'lucide-react';

export default function QuickWin() {
    return (
        <section id="quickwin" className="w-full bg-emt-bg py-24 z-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <span className="text-emt-blue font-bold tracking-widest uppercase text-sm mb-3 block">Ejecución Constatable</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-emt-dark mb-4 drop-shadow-sm leading-tight">
                        Quick Win: Mockup Funcional B2B
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed text-balance">
                        Una muestra práctica de lo que un equipo de negocio puede construir y lanzar en apenas unas semanas para comercializar BiciMAD a empresas.
                    </p>
                </div>

                <div className="space-y-16">

                    {/* ----- MOCKUP 1: LANDING PAGE ----- */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-center text-emt-dark mb-6">
                            1. El Canal de Venta (Landing Corporativa)
                        </h3>
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Browser Chrome */}
                            <div className="bg-gray-100 flex items-center px-4 py-3 border-b border-gray-200 gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="bg-white px-4 py-1.5 rounded-md text-xs text-gray-400 w-full max-w-md mx-auto flex items-center justify-center font-mono">
                                    <ShieldCheck size={14} className="mr-1 text-gray-300" />
                                    https://business.bicimad.com
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="bg-white">
                                {/* Hero mock */}
                                <div className="bg-emt-dark text-white p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute opacity-10 right-[-10%] bottom-[-20%] pointer-events-none">
                                        <Bike size={400} />
                                    </div>
                                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 z-10">
                                        BiciMAD BUSINESS
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 z-10 max-w-2xl">
                                        La movilidad sostenible que tu empresa necesita
                                    </h1>
                                    <p className="text-blue-100 text-lg mb-8 max-w-xl z-10">
                                        El programa corporativo de EMT Madrid para reducir la huella de carbono, mejorar el bienestar del equipo y cumplir tu Plan PMUS.
                                    </p>
                                    <button className="bg-emt-green text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition-colors z-10 shadow-lg text-lg">
                                        Solicitar Demo Comercial
                                    </button>
                                </div>

                                {/* Beneficios mock */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-gray-50 border-t border-gray-100">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><Leaf size={28} /></div>
                                        <h3 className="font-bold text-gray-800 mb-2">Reducción de CO2 certificada</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">Certificado anual ESG respaldado por los kilómetros verificados en nuestra flota de bicicletas 100% eléctricas.</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 text-emt-blue rounded-full flex items-center justify-center mx-auto mb-4"><ShieldCheck size={28} /></div>
                                        <h3 className="font-bold text-gray-800 mb-2">Cumplimiento RD 4/2023</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">La mejor herramienta para consolidar el Plan de Movilidad Sostenible de tu empresa y potenciar los reportes no financieros.</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4"><Users size={28} /></div>
                                        <h3 className="font-bold text-gray-800 mb-2">Salud y Beneficio Social</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">Incentiva los hábitos saludables de tu plantilla con un beneficio social corporativo imbatible frente a la competencia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----- CONEXION NARRATIVA ----- */}
                    <div className="flex flex-col items-center justify-center opacity-60">
                        <div className="h-16 border-l-2 border-dashed border-emt-blue mb-4"></div>
                        <ArrowDown className="text-emt-blue animate-bounce" size={32} />
                        <p className="text-sm font-bold text-emt-blue mt-2 uppercase tracking-widest text-center">Una vez contratado...</p>
                    </div>

                    {/* ----- MOCKUP 2: DASHBOARD CLIENTE ----- */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-center text-emt-dark mb-6">
                            2. El Panel de Control (App B2B Privada)
                        </h3>
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Browser Chrome */}
                            <div className="bg-gray-100 flex items-center px-4 py-3 border-b border-gray-200 gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="bg-white px-4 py-1.5 rounded-md text-xs text-gray-400 w-full max-w-md mx-auto flex items-center justify-center font-mono">
                                    <ShieldCheck size={14} className="mr-1 text-gray-300" />
                                    https://app.business.bicimad.com/dashboard
                                </div>
                            </div>

                            {/* Dash Content */}
                            <div className="bg-gray-50 w-full font-sans">
                                {/* Fake client topbar */}
                                <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10 relative">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-900 rounded-md text-white font-bold flex items-center justify-center shadow-sm">TC</div>
                                        <div>
                                            <p className="font-bold text-sm text-gray-900 leading-none">TechCorp España S.L.</p>
                                            <p className="text-xs text-gray-500 mt-1">Plan Enterprise • ID: 89932</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="hidden sm:flex items-center gap-2 text-sm text-emt-blue font-bold px-4 py-2 bg-blue-50/50 rounded hover:bg-blue-100 transition-colors border border-blue-100 shadow-sm">
                                            <FileDown size={16} /> Descargar Certificado ESG
                                        </button>
                                        <img src="/profile.jpg" alt="Avatar Director HR" className="w-9 h-9 rounded-full border border-gray-200 shadow-sm object-cover" />
                                    </div>
                                </div>

                                <div className="p-6 md:p-8">

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                                        <div>
                                            <h2 className="text-2xl font-bold font-display text-gray-900">Resumen de Impacto Mensual</h2>
                                            <p className="text-sm text-gray-500 font-medium">Periodo evaluado: Últimos 30 días</p>
                                        </div>
                                        <span className="text-xs text-green-600 bg-green-100 font-bold px-3 py-1.5 rounded-full inline-flex md:self-start border border-green-200">
                                            Estado: Activo (450 cuentas)
                                        </span>
                                    </div>

                                    {/* KPI Widget Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-emt-blue">
                                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Empleados Activos</p>
                                            <p className="text-3xl font-bold text-gray-900">87 <span className="text-sm text-green-500 font-medium tracking-normal ml-1">+5</span></p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-emt-green">
                                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Viajes Realizados</p>
                                            <p className="text-3xl font-bold text-gray-900">3.240 <span className="text-sm text-green-500 font-medium tracking-normal ml-1">+18%</span></p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-green-500">
                                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">CO2 Ahorrado</p>
                                            <p className="text-3xl font-bold text-gray-900">486<span className="text-xl ml-1 text-gray-500">kg</span></p>
                                        </div>
                                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-purple-500">
                                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Km Recorridos</p>
                                            <p className="text-3xl font-bold text-gray-900">12.9<span className="text-xl ml-1 text-gray-500">k</span></p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-center items-center relative overflow-hidden h-72">
                                            <div className="absolute top-5 left-5 text-sm font-bold text-gray-700 flex items-center gap-2">
                                                <TrendingUp size={16} className="text-emt-blue" /> Evolución de uso por la plantilla (Últimos 6 Meses)
                                            </div>
                                            {/* Fake decorative chart bars */}
                                            <div className="flex items-end gap-3 w-full h-36 px-4 sm:px-10 mt-10">
                                                <div className="bg-blue-100 hover:bg-emt-blue w-full h-[40%] rounded-t-sm transition-colors relative group"><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">1.2k</span></div>
                                                <div className="bg-blue-100 hover:bg-emt-blue w-full h-[55%] rounded-t-sm transition-colors relative group"><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">1.6k</span></div>
                                                <div className="bg-blue-100 hover:bg-emt-blue w-full h-[50%] rounded-t-sm transition-colors relative group"><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">1.5k</span></div>
                                                <div className="bg-blue-100 hover:bg-emt-blue w-full h-[80%] rounded-t-sm transition-colors relative group"><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">2.4k</span></div>
                                                <div className="bg-blue-100 hover:bg-emt-blue w-full h-[90%] rounded-t-sm transition-colors relative group"><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">2.8k</span></div>
                                                <div className="bg-emt-blue w-full h-[100%] rounded-t-md shadow-sm relative group"><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-emt-dark opacity-100">3.2k</span></div>
                                            </div>
                                            <div className="flex justify-between w-full px-4 sm:px-10 mt-3 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                                <span>Oct</span><span>Nov</span><span>Dic</span><span>Ene</span><span>Feb</span><span className="text-emt-blue">Mar</span>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 overflow-hidden flex flex-col h-72">
                                            <p className="text-sm font-bold text-gray-700 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                                                <Bike size={16} className="text-emt-blue" /> Top Estaciones Destino
                                            </p>
                                            <ul className="space-y-4 flex-1 flex flex-col justify-between">
                                                {['1. Puerta del Sol', '2. Plaza de Castilla', '3. Nuevos Ministerios', '4. Atocha Renfe', '5. Plaza de España'].map((station, idx) => (
                                                    <li key={idx} className="flex justify-between items-center text-sm group">
                                                        <span className="text-gray-600 font-medium truncate pr-4 group-hover:text-emt-blue transition-colors">{station}</span>
                                                        <span className="text-gray-900 font-bold bg-gray-50 px-2 py-1 rounded text-xs">{Math.floor(800 - (idx * 140))} v.</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
