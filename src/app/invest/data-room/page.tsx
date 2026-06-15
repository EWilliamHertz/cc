"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  BarChart, 
  PieChart, 
  Users, 
  ShieldCheck,
  ChevronRight,
  TrendingUp
} from "lucide-react";

const DataRoom = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Secure Access Environment</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Financial Data Room</h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-gray-700">Live Financial Feed Active</span>
          </div>
        </div>

        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Target EBITDA (FY27)", value: "19.2%", icon: BarChart, color: "text-blue-600" },
            { label: "Series A Pre-Money", value: "$22M", icon: TrendingUp, color: "text-green-600" },
            { label: "Total IP Value", value: "Verified", icon: PieChart, color: "text-green-600" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">Proprietary Data</span>
              </div>
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Document Repository */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  Due Diligence Repository
                </h2>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Confidential</span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-50">
                {[
                  { name: "ClimateCurtains_Full_Financial_Model_v2026.xlsx", size: "14.8 MB", type: "Financials" },
                  { name: "Swedish_Patent_SE540848C2_Certified_Copy.pdf", size: "4.2 MB", type: "Legal/IP" },
                  { name: "European_Patent_EP3022379_Grant_Details.pdf", size: "5.1 MB", type: "Legal/IP" },
                  { name: "Chalmers_Technical_Validation_Thermal_Sealing.pdf", size: "12.4 MB", type: "Scientific" },
                  { name: "Series_A_Investment_Memorandum_PITCH.pdf", size: "8.7 MB", type: "Strategic" },
                  { name: "Production_Scalability_Analysis_Nordics.pdf", size: "3.2 MB", type: "Operations" },
                ].map((doc, idx) => (
                  <div key={idx} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-white transition-colors">
                        <FileText className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-[10px] font-black text-green-600 uppercase">Download Secure</span>
                       <Download className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Team & Cap Table */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-[2rem] p-8 text-white">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <Users className="w-5 h-5 text-green-500" />
                Executive Leadership
              </h3>
              <div className="space-y-8">
                {[
                  { name: "Erik Andersson", role: "CEO & Founder", origin: "IP Holder / Chalmers Engineer" },
                  { name: "Peter", role: "Executive Board", origin: "Climate Curtains AB" },
                  { name: "Dr. Lars Berg", role: "Scientific Advisor", origin: "Thermal Performance Expert" },
                ].map((member, idx) => (
                  <div key={idx} className="border-l-2 border-white/10 pl-6 py-1">
                    <p className="font-bold text-sm text-white">{member.name}</p>
                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-[0.2em] mt-1">{member.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{member.origin}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Capital Commitment</h3>
              <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="bg-green-600 h-full relative"
                >
                   <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
              <div className="flex justify-between items-center mb-8">
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Committed</p>
                    <p className="text-xl font-black text-gray-900">$5.4M</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Target</p>
                    <p className="text-xl font-black text-gray-400">$8.0M</p>
                 </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg group">
                Submit Letter of Intent <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRoom;
