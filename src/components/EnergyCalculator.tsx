"use client";

import React from "react";
import { create } from "zustand";
import { motion } from "framer-motion";
import { Calculator, Zap, Thermometer, Coins } from "lucide-react";

interface CalculatorState {
  squareMeters: number;
  heatingType: "electric" | "gas" | "heat-pump";
  setSquareMeters: (val: number) => void;
  setHeatingType: (type: "electric" | "gas" | "heat-pump") => void;
}

const useCalculatorStore = create<CalculatorState>((set) => ({
  squareMeters: 100,
  heatingType: "electric",
  setSquareMeters: (val) => set({ squareMeters: val }),
  setHeatingType: (type) => set({ heatingType: type }),
}));

const EnergyCalculator = () => {
  const { squareMeters, heatingType, setSquareMeters, setHeatingType } = useCalculatorStore();

  // Mathematical logic based on 30-50% window heat loss
  // Industry average: ~150 kWh/m2 per year for residential heating
  const avgConsumption = squareMeters * 150;
  const windowLoss = avgConsumption * 0.4; // 40% loss through windows
  const savingsKwh = windowLoss * 0.35; // ~35% efficiency improvement on average

  const rates = { electric: 0.35, gas: 0.15, "heat-pump": 0.12 };
  const annualSavings = savingsKwh * rates[heatingType];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
      <div className="md:flex">
        {/* Controls */}
        <div className="md:w-1/2 p-8 md:p-12 bg-white">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Energy Savings Calculator</h2>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                Property Size: <span className="text-green-600">{squareMeters} m²</span>
              </label>
              <input
                type="range"
                min="20"
                max="500"
                value={squareMeters}
                onChange={(e) => setSquareMeters(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                Primary Heating Source
              </label>
              <div className="grid grid-cols-1 gap-3">
                {(["electric", "gas", "heat-pump"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setHeatingType(type);
                    }}
                    className={`px-6 py-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                      heatingType === type
                        ? "border-green-600 bg-green-50 text-green-800 shadow-sm"
                        : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <span className="capitalize font-bold pointer-events-none">
                      {type.replace("-", " ")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:w-1/2 p-8 md:p-12 bg-gray-900 text-white">
          <h3 className="text-lg font-medium text-gray-400 mb-8">Estimated Annual Impact</h3>
          
          <div className="space-y-10">
            <motion.div
              key={annualSavings}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-6"
            >
              <div className="bg-green-600/20 p-4 rounded-2xl">
                <Coins className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Financial Savings</p>
                <p className="text-4xl font-bold">€{annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-6">
              <div className="bg-blue-600/20 p-4 rounded-2xl">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Energy Conserved</p>
                <p className="text-4xl font-bold">{savingsKwh.toLocaleString('en-US', { maximumFractionDigits: 0 })} kWh</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-orange-600/20 p-4 rounded-2xl">
                <Thermometer className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">U-Value Impact</p>
                <p className="text-4xl font-bold">-0.8 W/m²K</p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-xs text-gray-500 leading-relaxed italic">
            *Calculations are estimates based on standard European building metrics and SE540848C2 efficiency benchmarks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyCalculator;
