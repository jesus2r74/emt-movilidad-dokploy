import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function SimulatorBiciMADBusiness() {
    const [companies, setCompanies] = useState(100);
    const [employees, setEmployees] = useState(50);
    const [plan, setPlan] = useState('Business');

    const getPlanPrice = (planType) => {
        switch (planType) {
            case 'Starter': return 6;
            case 'Business': return 4;
            case 'Enterprise': return 3;
            default: return 4;
        }
    };

    const calculateImpact = () => {
        const totalEmployees = companies * employees;
        const pricePerEmployee = getPlanPrice(plan);
        const monthlyRevenue = totalEmployees * pricePerEmployee;
        const annualRevenue = monthlyRevenue * 12;

        // Each active employee implies roughly ~15 trips/month average
        const estimatedNewTripsMonth = totalEmployees * 15;

        // 1 trip = ~183g CO2 avoided
        const co2AvoidedKgYear = (estimatedNewTripsMonth * 12 * 0.183);
        const co2AvoidedTonYear = co2AvoidedKgYear / 1000;

        return {
            annualRevenue,
            monthlyRevenue,
            estimatedNewTripsMonth,
            co2AvoidedTonYear
        };
    };

    const result = calculateImpact();

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 relative">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-3 bg-emt-blue/10 text-emt-blue rounded-lg">
                    <Calculator size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-display font-bold text-emt-dark">
                        Simulador de Revenue B2B
                    </h3>
                    <p className="text-sm text-gray-500">Proyección anual modelo BiciMAD Business</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Sliders Input */}
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-gray-700">Empresas adheridas</label>
                            <span className="text-sm font-bold text-emt-blue">{companies}</span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="500"
                            step="10"
                            value={companies}
                            onChange={(e) => setCompanies(Number(e.target.value))}
                            className="w-full accent-emt-blue h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-gray-700">Empleados promedio por empresa</label>
                            <span className="text-sm font-bold text-emt-blue">{employees}</span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="200"
                            step="5"
                            value={employees}
                            onChange={(e) => setEmployees(Number(e.target.value))}
                            className="w-full accent-emt-blue h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Plan Comercial Preferente</label>
                        <div className="grid grid-cols-3 gap-2">
                            {['Starter', 'Business', 'Enterprise'].map(p => (
                                <button
                                    key={p}
                                    onClick={() => setPlan(p)}
                                    className={`py-2 text-xs font-bold rounded shadow-sm border ${plan === p
                                            ? 'bg-emt-blue text-white border-transparent'
                                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Output */}
                <div className="bg-emt-bg p-6 rounded-xl flex flex-col justify-center border border-gray-100 space-y-4">
                    <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-1">
                            Ingresos Recurrentes (ARR)
                        </p>
                        <p className="text-4xl md:text-5xl font-display font-bold text-emt-green flex items-center gap-2">
                            {result.annualRevenue.toLocaleString('es-ES')} €
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            ({result.monthlyRevenue.toLocaleString('es-ES')} € / mes)
                        </p>
                    </div>

                    <hr className="border-gray-200 my-2" />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Nuevos viajes / mes</p>
                            <p className="text-xl font-bold text-gray-800 flex items-center gap-1 mt-1">
                                <TrendingUp size={16} className="text-emt-blue" />
                                {result.estimatedNewTripsMonth.toLocaleString('es-ES')}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">CO2 Evitado / año</p>
                            <p className="text-xl font-bold text-gray-800 mt-1">
                                {Math.round(result.co2AvoidedTonYear).toLocaleString('es-ES')} Tn
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
