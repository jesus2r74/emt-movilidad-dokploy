import React from 'react';

export default function KPICard({ icon, value, badge, badgeColor, subtext, trendIcon, footerText, delay = 0 }) {
    // Use tailwind classes for delay mapping or inline style for simplicity
    return (
        <div
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="text-4xl bg-emt-light p-3 rounded-lg text-emt-blue">
                    {icon}
                </div>
                {badge && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${badgeColor}`}>
                        {trendIcon} {badge}
                    </span>
                )}
            </div>

            <div className="mb-4 flex-grow">
                <h3 className="text-4xl font-display font-bold text-emt-dark tracking-tight mb-2">
                    {value}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {subtext}
                </p>
            </div>

            {footerText && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emt-blue inline-block"></span>
                        {footerText}
                    </p>
                </div>
            )}
        </div>
    );
}
