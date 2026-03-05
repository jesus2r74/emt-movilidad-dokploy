import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Diagnóstico', href: '#diagnostico' },
        { label: 'Oportunidades', href: '#propuestas' },
        { label: 'Mockup B2B', href: '#quickwin' },
        { label: 'Impacto', href: '#impacto' },
        { label: 'Sobre mí', href: '#sobremi' }
    ];

    const handleScrollTo = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // offset for fixed navbar
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">

                {/* Logo/Brand */}
                <a href="#hero" className="flex items-center gap-2 group" onClick={(e) => handleScrollTo(e, '#hero')}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-xl transition-all ${scrolled ? 'bg-emt-blue text-white' : 'bg-white text-emt-dark'}`}>
                        JR
                    </div>
                    <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? 'text-emt-dark' : 'text-white'}`}>
                        Plan Estratégico EMT
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={`font-semibold text-sm tracking-wide transition-colors ${scrolled
                                    ? 'text-gray-600 hover:text-emt-blue'
                                    : 'text-white/80 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:jesusromeromadrid@gmail.com"
                        className={`px-5 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${scrolled
                                ? 'bg-emt-blue text-white hover:bg-emt-dark'
                                : 'bg-white text-emt-blue hover:bg-gray-100'
                            }`}
                    >
                        Contactar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X className={scrolled ? 'text-emt-dark' : 'text-white'} size={28} />
                    ) : (
                        <Menu className={scrolled ? 'text-emt-dark' : 'text-white'} size={28} />
                    )}
                </button>

            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-6 gap-6 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="font-bold text-gray-700 text-lg hover:text-emt-blue"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:jesusromeromadrid@gmail.com"
                        className="mt-4 px-8 py-3 rounded-full bg-emt-blue text-white font-bold"
                    >
                        Contactar
                    </a>
                </div>
            )}
        </nav>
    );
}
