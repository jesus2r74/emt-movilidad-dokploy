import React from 'react';
import { Mail, Phone, Linkedin, CheckCircle2, Globe, BrainCircuit } from 'lucide-react';

const matchData = [
    { requirement: "Titulación superior", me: "Doctorado en Educación y Psicología (+ MBA)" },
    { requirement: "Posgrado en desarrollo de negocio", me: "MBA + Certificación PCC-ICF" },
    { requirement: "+5 años posiciones directivas dev. neg.", me: "+20 años: CEO, Director S. Europe, Director Negocio España" },
    { requirement: "Exp. en movilidad y negocio digital", me: "Desarrollo de este MVP; Transformación Digital + IA" },
    { requirement: "Nivel alto de inglés", me: "Trayectoria de gestión multi-país y roles internacionales" },
    { requirement: "Liderazgo demostrado", me: "CEO con P&L propio consolidado; gestión de equipos >20 FTE" },
    { requirement: "Iniciativa y capacidad proactiva", me: "Esta misma aplicación interactiva" },
];

export default function SobreMi() {
    return (
        <section id="sobremi" className="w-full bg-emt-dark py-24 z-20 relative text-white">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <span className="text-emt-light font-bold tracking-widest uppercase text-sm mb-3 block opacity-80">Por qué yo</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-sm leading-tight max-w-2xl mx-auto">
                        La ejecución necesita liderazgo
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Col: Match Table */}
                    <div className="lg:col-span-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 md:p-10 shadow-xl relative overflow-hidden">

                        {/* Decorative faint icon */}
                        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
                            <BrainCircuit size={400} />
                        </div>

                        <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                            <CheckCircle2 className="text-emt-green" size={28} />
                            Match de Perfil
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse z-10 relative">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="pb-4 font-bold text-blue-200 w-1/2 uppercase tracking-wide text-xs">Lo que exige EMT</th>
                                        <th className="pb-4 font-bold text-emt-green w-1/2 uppercase tracking-wide text-xs">Lo que aporto como Jefe Div.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {matchData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                                            <td className="py-4 pr-4 font-medium text-gray-300 leading-relaxed max-w-[200px]">
                                                {item.requirement}
                                            </td>
                                            <td className="py-4 pl-4 font-bold text-white leading-relaxed">
                                                <div className="flex gap-2 items-start">
                                                    <CheckCircle2 size={16} className="text-emt-green mt-1 shrink-0" />
                                                    <span>{item.me}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 italic text-blue-200 leading-relaxed bg-black/20 p-6 rounded-xl border-l-4 border-l-emt-blue mb-0">
                            "No he querido limitarme a enviar un currículum estático frente a un desafío tan complejo. He preferido invertir mi tiempo en demostrar en la práctica cómo analizaría el negocio y qué plan ejecutaría desde mi primer día en la División."
                        </div>
                    </div>

                    {/* Right Col: Personal Info Card */}
                    <div className="lg:col-span-4 bg-white rounded-2xl text-emt-dark border border-gray-100 p-8 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">

                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emt-light shadow-lg mb-6 relative group">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src="/profile.jpg"
                                    alt="Jesús Romero"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl font-display font-bold mb-1">Jesús Romero</h3>
                        <p className="text-emt-blue font-bold text-sm tracking-wide uppercase mb-6">Candidato a Jefe de División</p>

                        <div className="w-full space-y-3 mb-8">
                            <a href="mailto:jesusromeromadrid@gmail.com" className="flex items-center gap-3 bg-gray-50 hover:bg-emt-light/50 p-3 rounded-xl transition-colors w-full text-left border border-transparent hover:border-emt-blue/20">
                                <div className="bg-emt-blue text-white p-2 rounded-lg shrink-0"><Mail size={16} /></div>
                                <span className="text-sm font-bold text-gray-700 truncate">jesusromeromadrid@gmail.com</span>
                            </a>

                            <a href="tel:666533060" className="flex items-center gap-3 bg-gray-50 hover:bg-emt-light/50 p-3 rounded-xl transition-colors w-full text-left border border-transparent hover:border-emt-blue/20">
                                <div className="bg-emt-dark text-white p-2 rounded-lg shrink-0"><Phone size={16} /></div>
                                <span className="text-sm font-bold text-gray-700">666 533 060</span>
                            </a>

                            <a href="https://www.linkedin.com/in/drjesusromero/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-50 hover:bg-emt-light/50 p-3 rounded-xl transition-colors w-full text-left border border-transparent hover:border-emt-blue/20 group">
                                <div className="bg-[#0077b5] text-white p-2 rounded-lg shrink-0 group-hover:bg-[#005582] transition-colors"><Linkedin size={16} /></div>
                                <span className="text-sm font-bold text-gray-700 truncate w-full pr-2">/in/drjesusromero</span>
                            </a>

                            <a href="https://jesusromero.es" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-50 hover:bg-emt-light/50 p-3 rounded-xl transition-colors w-full text-left border border-transparent hover:border-emt-blue/20">
                                <div className="bg-gray-400 text-white p-2 rounded-lg shrink-0"><Globe size={16} /></div>
                                <span className="text-sm font-bold text-gray-700">jesusromero.es</span>
                            </a>
                        </div>

                        <div className="w-full pt-6 border-t border-gray-100 flex justify-center">
                            <a
                                href="/cv.pdf"
                                download="CV_Jesus_Romero.pdf"
                                className="bg-emt-dark hover:bg-black text-white px-8 py-3 rounded-full font-bold shadow-md transition-colors w-full focus:ring-4 focus:ring-gray-300 text-center block"
                            >
                                Descargar CV Completo
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
