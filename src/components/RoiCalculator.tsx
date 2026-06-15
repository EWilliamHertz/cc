"use client";

import React, { useState } from "react";
import { Calculator, TrendingDown, Leaf, DollarSign } from "lucide-react";

const RoiCalculator = () => {
  const [facilitySize, setFacilitySize] = useState<number>(50000);
  const [monthlyHeatingBill, setMonthlyHeatingBill] = useState<number>(8000);
  const [installationCost, setInstallationCost] = useState<number>(15000);

  // Core Math
  const estimatedSavingsPercent = 0.15; // 15% reduction
  const monthlySavings = monthlyHeatingBill * estimatedSavingsPercent;
  const annualSavings = monthlySavings * 12;
  const monthsToRoi = installationCost / monthlySavings;

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 lg:p-12 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-green-50 text-green-600 rounded-2xl">
          <Calculator className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">B2B ROI Calculator</h2>
          <p className="text-gray-500 font-medium mt-1">Calculate your facility's projected savings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sliders / Inputs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Facility Size (Sq Ft)</label>
              <span className="text-lg font-bold text-gray-900">{facilitySize.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="250000"
              step="5000"
              value={facilitySize}
              onChange={(e) => setFacilitySize(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Monthly Heating Bill ($)</label>
              <span className="text-lg font-bold text-gray-900">${monthlyHeatingBill.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={monthlyHeatingBill}
              onChange={(e) => setMonthlyHeatingBill(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Est. Installation Cost ($)</label>
              <span className="text-lg font-bold text-gray-900">${installationCost.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={installationCost}
              onChange={(e) => setInstallationCost(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 space-y-6 flex flex-col justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100">
            <div className="flex items-center gap-3">
              <TrendingDown className="w-5 h-5 text-green-600" />
              <span className="font-bold text-gray-600">Annual Savings</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">${annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-bold text-gray-600">Payback Period</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">{monthsToRoi.toFixed(1)} Months</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100">
            <div className="flex items-center gap-3">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="font-bold text-gray-600">Efficiency Boost</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;