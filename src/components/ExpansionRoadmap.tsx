"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Target, CheckCircle2 } from "lucide-react";

const ExpansionRoadmap = () => {
  const phases = [
    {
      title: "Phase 1: China Expansion",
      timeline: "Months 1-12",
      objective: "Local partnerships, IP registration, targeting USD 3M-5M.",
      deliverables: ["Manufacturing Hub established", "Tier-1 Real Estate Pilots", "CCC Certification"],
      color: "border-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Phase 2: Japan Entry",
      timeline: "Months 13-24",
      objective: "Technical validation, tier-one pilots, targeting USD 8M-12M.",
      deliverables: ["METI Compliance", "Historic District Approvals", "JV with SoftBank Energy"],
      color: "border-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Phase 3: South Korea Scale",
      timeline: "Months 25-36",
      objective: "G-SEED certification alignment, targeting USD 18M-25M.",
      deliverables: ["Government Procurement Listing", "Smart City Integration", "National TV Campaign"],
      color: "border-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-12 bg-white rounded-[3rem] shadow-sm border border-gray-100">
      <div className="space-y-24">
        {phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 1, y: 0 }} // Start visible to avoid empty state
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
          >
            {/* Content Card */}
            <div className="w-full md:w-1/2">
              <div className={`p-8 rounded-[2.5rem] bg-white border-t-8 ${phase.color} shadow-xl shadow-gray-200/50`}>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{phase.timeline}</span>
                  <MapPin className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  {phase.objective}
                </p>
                <div className="space-y-3">
                  {phase.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full hidden md:flex items-center justify-center z-10">
              <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
            </div>

            {/* Metrics Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="text-center md:text-left">
                <Target className="w-12 h-12 text-gray-100 mb-4 mx-auto md:mx-0" />
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Revenue Target</p>
                <p className="text-4xl font-black text-gray-900">{phase.objective.match(/USD \d+M-\d+M/)?.[0] || 'TBD'}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpansionRoadmap;
