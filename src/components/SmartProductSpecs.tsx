"use client";

import React, { useState } from "react";
import { 
  Wifi, 
  Smartphone, 
  Sun, 
  Clock, 
  Thermometer, 
  Gauge, 
  Zap,
  ChevronRight,
  Calculator,
  Globe
} from "lucide-react";

const SmartProductSpecs = () => {
  const [activeTab, setActiveTab] = useState("smart");

  const smartFeatures = [
    { 
      icon: Wifi, 
      title: "IoT Connectivity", 
      desc: "Integrated Zigbee and Wi-Fi 6 modules for seamless Building Management System (BMS) integration and Matter support." 
    },
    { 
      icon: Smartphone, 
      title: "Climate App Control", 
      desc: "Remote scheduling, real-time thermal monitoring, and multi-zone management with precise control over curtain depth." 
    },
    { 
      icon: Sun, 
      title: "Solar-Adaptive Sensors", 
      desc: "Luminosity and UV sensors automatically adjust curtain position to maximize passive solar gain in winter and minimize cooling load in summer." 
    },
    { 
      icon: Clock, 
      title: "Predictive Timers", 
      desc: "Algorithms optimize thermal sealing based on local weather forecasts and occupancy patterns." 
    }
  ];

  const technicalData = [
    { label: "U-Value Improvement", value: "-0.85 W/m²K", improvement: "65.2%" },
    { label: "Solar Heat Gain (g)", value: "0.16", improvement: "Verfied" },
    { label: "Thermal Resistance (R)", value: "0.62 m²K/W", improvement: "Premium" },
    { label: "Flame Retardant", value: "B-s1, d0", improvement: "EU Certified" }
  ];

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        {[
          { id: "smart", label: "Smart Controls", icon: Zap },
          { id: "tech", label: "Technical Specs", icon: Gauge },
          { id: "financial", label: "Financial Impact", icon: Calculator }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              console.log("Switching to tab:", tab.id);
              setActiveTab(tab.id);
            }}
            className={`flex-grow flex items-center justify-center gap-2 py-6 font-bold transition-all relative z-30 cursor-pointer ${
              activeTab === tab.id ? "text-green-600 bg-white" : "text-gray-400 hover:text-gray-600 hover:bg-white/50"
            }`}
          >
            <tab.icon className="w-5 h-5 pointer-events-none" />
            <span className="pointer-events-none">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600" />
            )}
          </button>
        ))}
      </div>

      <div className="p-8 md:p-12 min-h-[500px]">
          {activeTab === "smart" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
              {smartFeatures.map((f, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:border-green-200 transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
              <div className="md:col-span-2 bg-green-600 text-white p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-full">
                       <Smartphone className="w-8 h-8" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold">Download the Climate App</h4>
                       <p className="text-green-100 text-sm">Simulate your thermal performance and manage your curtains remotely.</p>
                    </div>
                 </div>
                 <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-50 transition-all">
                    Request Demo <ChevronRight className="w-4 h-4" />
                 </button>
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {technicalData.map((d, i) => (
                   <div key={i} className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{d.label}</p>
                      <p className="text-2xl font-black text-gray-900">{d.value}</p>
                      <div className="mt-2 inline-block px-2 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-md uppercase">
                         {d.improvement}
                      </div>
                   </div>
                 ))}
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                 <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                       <h4 className="text-2xl font-bold mb-4">Patent Verified SE540848C2</h4>
                       <p className="text-gray-400 leading-relaxed text-sm">
                          Our Swedish-patented multi-layer barrier tech creates a hermetic thermal seal. Validated by Chalmers University and Vinnova to outperform traditional triple glazing by 41.8% in peak winter conditions.
                       </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                          <Thermometer className="w-5 h-5 text-orange-400 mb-2" />
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">U-Value Impact</p>
                          <p className="text-lg font-bold">-0.85 W/m²K</p>
                       </div>
                       <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                          <Globe className="w-5 h-5 text-blue-400 mb-2" />
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">R-Value Barrier</p>
                          <p className="text-lg font-bold">0.62</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {activeTab === "financial" && (
            <div className="flex flex-col items-center justify-center space-y-12 py-12 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center max-w-xl">
                 <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-green-600" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">The Climate Curtains Payback Engine</h3>
                 <p className="text-gray-600 text-sm">
                    Our technology converts passive insulation into direct capital returns. Based on European average energy prices, we target an 18-month payback period for commercial installations.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
                 <div className="p-8 border border-gray-100 rounded-[2rem] text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 text-nowrap">Annual Savings/m²</p>
                    <p className="text-4xl font-black text-gray-900">€8.40</p>
                    <p className="text-sm text-green-600 mt-2 font-bold italic">Energy Direct Reduction</p>
                 </div>
                 <div className="p-8 bg-gray-900 text-white rounded-[2rem] text-center scale-110 shadow-2xl relative z-20">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 text-nowrap">Portfolio Return</p>
                    <p className="text-4xl font-black text-green-500">22%</p>
                    <p className="text-sm text-gray-400 mt-2 font-bold italic">Estimated Annual Yield</p>
                 </div>
                 <div className="p-8 border border-gray-100 rounded-[2rem] text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 text-nowrap">CO2 Offset</p>
                    <p className="text-4xl font-black text-gray-900">12kg</p>
                    <p className="text-sm text-blue-600 mt-2 font-bold italic">Per m² / Year</p>
                 </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default SmartProductSpecs;
