"use client";

import React, { useState, useMemo } from "react";
import { BarChart3, Snowflake, ThermometerSun, Wallet } from "lucide-react";

const HvacDashboard = () => {
  const [facilitySize, setFacilitySize] = useState(50000);
  const [winterBill, setWinterBill] = useState(8000);
  const [buildingAge, setBuildingAge] = useState("1980-2010");

  // Swedish Climate Temperature/Efficiency Curve
  // Higher numbers indicate higher thermal loss (and thus higher potential gains from Climate Curtains)
  const monthlyCurve = [
    { month: "Jan", severity: 1.0 },
    { month: "Feb", severity: 0.95 },
    { month: "Mar", severity: 0.7 },
    { month: "Apr", severity: 0.4 },
    { month: "May", severity: 0.2 },
    { month: "Jun", severity: 0.05 },
    { month: "Jul", severity: 0.0 },
    { month: "Aug", severity: 0.05 },
    { month: "Sep", severity: 0.2 },
    { month: "Oct", severity: 0.5 },
    { month: "Nov", severity: 0.8 },
    { month: "Dec", severity: 0.95 },
  ];

  // Logic calculation based on building insulation degradation
  const metrics = useMemo(() => {
    let ageMultiplier = 1.0;
    if (buildingAge === "Pre-1980") ageMultiplier = 1.3; // Bad insulation
    if (buildingAge === "Post-2010") ageMultiplier = 0.7; // Good insulation

    const peakWinterGainPercent = 18 * ageMultiplier; 
    let totalAnnualSavings = 0;

    const chartData = monthlyCurve.map((data) => {
      // Calculate efficiency gain % for this month
      const gainPercent = peakWinterGainPercent * data.severity;
      
      // Calculate dollar savings for this month (simulating lower bills in summer)
      const estimatedMonthlyBill = winterBill * (data.severity < 0.2 ? 0.2 : data.severity);
      const monthlySavings = estimatedMonthlyBill * (gainPercent / 100);
      
      totalAnnualSavings += monthlySavings;

      return {
        ...data,
        gainPercent,
        savings: monthlySavings
      };
    });

    const peakSavings = chartData[0].savings; // January
    const averageSavings = totalAnnualSavings / 12;

    return { chartData, peakWinterGainPercent, peakSavings, averageSavings, totalAnnualSavings };
  }, [facilitySize, winterBill, buildingAge]);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 lg:p-12 max-w-5xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-green-600" />
            HVAC Efficiency Projections
          </h2>
          <p className="text-gray-500 font-medium mt-2">Modeled for Northern European climate variations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Controls Column */}
        <div className="space-y-8 lg:col-span-1">
          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex justify-between">
              <span>Facility Size</span>
              <span className="text-gray-900">{facilitySize.toLocaleString()} sq ft</span>
            </label>
            <input
              type="range" min="10000" max="100000" step="5000"
              value={facilitySize}
              onChange={(e) => setFacilitySize(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex justify-between">
              <span>Peak Winter Bill</span>
              <span className="text-gray-900">${winterBill.toLocaleString()} /mo</span>
            </label>
            <input
              type="range" min="1000" max="20000" step="500"
              value={winterBill}
              onChange={(e) => setWinterBill(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Building Age</label>
            <select
              value={buildingAge}
              onChange={(e) => setBuildingAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-green-600 outline-none text-gray-700 font-medium"
            >
              <option value="Pre-1980">Pre-1980 (Legacy Insulation)</option>
              <option value="1980-2010">1980 - 2010 (Standard)</option>
              <option value="Post-2010">Post-2010 (Modern HVAC)</option>
            </select>
          </div>

          {/* Quick Stats */}
          <div className="pt-6 space-y-4 border-t border-gray-100">
             <div className="bg-green-50 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <Snowflake className="w-5 h-5 text-green-600" />
                   <span className="font-bold text-gray-700 text-sm">Peak Winter Savings</span>
                </div>
                <span className="font-bold text-green-700">${metrics.peakSavings.toLocaleString(undefined, {maximumFractionDigits: 0})} /mo</span>
             </div>
             <div className="bg-orange-50 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <ThermometerSun className="w-5 h-5 text-orange-500" />
                   <span className="font-bold text-gray-700 text-sm">Average Monthly</span>
                </div>
                <span className="font-bold text-orange-700">${metrics.averageSavings.toLocaleString(undefined, {maximumFractionDigits: 0})} /mo</span>
             </div>
          </div>
        </div>

        {/* Chart Column */}
        <div className="lg:col-span-2 flex flex-col justify-end h-[400px] lg:h-auto pb-4">
           
           <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-4">
              <div>
                 <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Annual Return</p>
                 <p className="text-4xl font-bold text-gray-900">${metrics.totalAnnualSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
              </div>
              <div className="text-right">
                 <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Max Efficiency Gain</p>
                 <p className="text-2xl font-bold text-green-600">{metrics.peakWinterGainPercent.toFixed(1)}%</p>
              </div>
           </div>

           {/* Custom CSS Bar Chart */}
           <div className="flex-grow flex items-end justify-between gap-2 pt-8">
              {metrics.chartData.map((data) => (
                 <div key={data.month} className="w-full flex flex-col items-center group relative">
                    {/* Tooltip */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs font-bold py-1 px-2 rounded-lg pointer-events-none whitespace-nowrap z-10">
                       ${data.savings.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </div>
                    {/* Bar */}
                    <div 
                       className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-md transition-all duration-500 ease-out group-hover:opacity-80"
                       style={{ height: `${Math.max(data.gainPercent * 3, 4)}px` }} // Scaled for visual effect
                    />
                    {/* Label */}
                    <span className="text-[10px] font-bold text-gray-400 uppercase mt-2">{data.month}</span>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default HvacDashboard;