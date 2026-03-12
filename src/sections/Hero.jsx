import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero({ onScrollDown }) {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen bg-gradient-to-br from-emt-dark to-emt-blue flex items-center justify-center overflow-hidden pt-20 pb-16"
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-white rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-emt-green rounded-full blur-[80px]" />
            </div>

            <div className="container relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">

                <span className="bg-white/10 border border-white/20 text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                    División de Nueva Movilidad y Negocios
                </span>

                <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight md:leading-[1.1] mb-4 animate-fade-in drop-shadow-lg">
                    Plan de Desarrollo de Negocio <span className="text-emt-light whitespace-nowrap">2026-2029</span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100 font-sans max-w-2xl mx-auto leading-relaxed mb-8">
                    EMT Madrid — Presentado por <strong className="text-white font-bold">Jesús Romero</strong>
                </p>

                {/* Video explicativo Embed */}
                <div className="w-full md:w-[75%] max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 animate-fade-in">
                    <video
                        controls
                        className="w-full aspect-video bg-black cursor-pointer"
                        poster="/play.png"
                    >
                        <source src="/emt_hero.mp4" type="video/mp4" />
                        Tu navegador no soporta el formato de vídeo.
                    </video>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center animate-slide-up">
                    <button
                        onClick={onScrollDown}
                        className="flex items-center gap-2 bg-white text-emt-blue font-bold px-8 py-4 rounded-full shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 ring-2 ring-transparent focus:ring-blue-300 outline-none"
                    >
                        Explorar el Plan <ArrowDown size={20} className="animate-bounce mt-1" />
                    </button>
                </div>

            </div>

            {/* Subtle bottom gradient to blend with next section */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-emt-bg to-transparent pointer-events-none" />
        </section>
    );
}
