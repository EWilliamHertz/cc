"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Award, ShieldCheck, Globe2, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import ExpansionRoadmap from "@/components/ExpansionRoadmap";

const InvestorPage = () => {
  return (
    <div className="bg-[#FDFDFD]">
      {/* Financial Hero */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80" 
            alt="Corporate Strategy"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-500 text-gray-900 text-xs font-black uppercase tracking-tighter rounded">Series A</span>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Investor</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
              Decarbonising the <br />
              <span className="text-green-500">Built Environment.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Climate Curtains is scaling a globally patented thermal technology (SE540848C2) targeting the USD 48.6B industrial energy efficiency market. <br /><br /> Join our $5M-$8M Series A round.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-3xl backdrop-blur-md">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Market TAM</p>
                <p className="text-3xl font-bold">$48.6B</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-3xl backdrop-blur-md">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Target EBITDA</p>
                <p className="text-3xl font-bold">20%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: ShieldCheck, title: "Dual Patents", desc: "Full IP protection across SE (SE540848C2) and EU (EP3022379)." },
              { icon: Award, title: "Award Winning", desc: "Energy Globe National Award Winner 2018 for outstanding innovation." },
              { icon: TrendingUp, title: "18mo Payback", desc: "Compelling ROI case for enterprise-scale industrial deployments." },
              { icon: Globe2, title: "Global Scale", desc: "Proven technology ready for rapid APAC and NA expansion." },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                <stat.icon className="w-10 h-10 text-green-600 mb-6" />
                <h3 className="text-lg font-bold mb-2">{stat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-tighter">APAC Go-To-Market Roadmap</h2>
            <ExpansionRoadmap />
          </div>

          {/* CTA to Data Room */}
          <div className="bg-green-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <Lock className="w-16 h-16 text-white/40 mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Access Gated Data Room</h2>
              <p className="text-green-100 text-lg max-w-2xl mx-auto mb-10">
                Authorized VCs can access our complete financial models, cap table, detailed technical validation reports, and supply chain logistics.
              </p>
              <Link 
                href="/invest/data-room"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Enter Data Room <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorPage;
