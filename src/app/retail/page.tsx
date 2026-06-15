"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Factory, GraduationCap, BarChart3, Clock, Layers } from "lucide-react";
import RetailLeadForm from "@/components/RetailLeadForm";
import RoiCalculator from "@/components/RoiCalculator";
import HvacDashboard from "@/components/HvacDashboard";
const RetailPage = () => {
  return (
    <div className="bg-[#FDFDFD]">
      {/* Industrial Hero */}
      <section className="relative py-24 border-b border-gray-100 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="Commercial Building"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-sm font-bold text-green-500 uppercase tracking-widest mb-4 block">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white">
                Passive Infrastructure <br />
                <span className="text-green-500">Active Returns.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Commercial buildings stand empty 60-75% of the time. Transform your windows into an automated energy-saving asset. Ideal for real estate developers, schools, and industrial facility managers.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-green-600 pl-6">
                  <p className="text-3xl font-bold text-green-600">18mo</p>
                  <p className="text-sm text-gray-500 font-medium">Avg. Payback Period</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <p className="text-3xl font-bold text-green-600">30%</p>
                  <p className="text-sm text-gray-500 font-medium">HVAC Load Reduction</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <RetailLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Verticals */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Optimised for Industrial Scalability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Building2, 
                title: "Commercial Real Estate", 
                desc: "Improve asset value and ESG ratings by drastically lowering operational energy overheads in office towers." 
              },
              { 
                icon: GraduationCap, 
                title: "Educational Facilities", 
                desc: "Automated climate control for classrooms and lecture halls during off-peak and vacation periods." 
              },
              { 
                icon: Factory, 
                title: "Industrial Plants", 
                desc: "Stabilize internal temperatures in large-scale manufacturing environments with minimal maintenance." 
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="py-24 px-4 bg-[#FDFDFD]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">See Your Savings</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Use our interactive calculator to project your annual savings and implementation ROI.</p>
    </div>
    <RoiCalculator />
  </div>
</section>
      {/* Case Study Mock */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <BarChart3 className="w-16 h-16 text-green-500 mb-8" />
              
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Technical Validation Report: Global HQ Alpha</h2>
                  <p className="text-gray-400 text-lg">
                    Implementation of Climate Curtains in a 12,000m² glass-facade office building resulted in a verified 22% reduction in total heating and cooling costs over a 12-month period.
                  </p>
                </div>
                
                
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>Automated night-time thermal sealing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-green-500" />
                  <span>Integration with existing Building Management Systems (BMS)</span>
                </li>
              </ul>
            </div>
          <div className="md:w-1/2 flex justify-center lg:justify-end">
               <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                 {/* Assuming the image you uploaded is named peter.png in the public folder */}
                 <img src="/peter.png" alt="Peter - Executive Board" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 
                 {/* Sleek Gradient Overlay */}
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-8 pt-20">
                   <p className="text-3xl font-bold text-white mb-1">Peter</p>
                   <p className="text-green-500 font-bold uppercase tracking-widest text-sm">Executive Lead</p>
                 </div>
               </div>
            </div>
          </div>
        </div>  
      </section>
      <HvacDashboard />
    </div>
  );
};

export default RetailPage;
