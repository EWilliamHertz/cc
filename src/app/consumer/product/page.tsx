"use client";

import React from "react";
import Image from "next/image";
import { Ruler, Moon, ShieldAlert, History } from "lucide-react";
import SmartProductSpecs from "@/components/SmartProductSpecs";

const ProductSpecs = () => {
  return (
    <div className="pt-24 pb-32 bg-[#FDFDFD]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80" 
                alt="Climate Curtains Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-green-600 text-white p-10 rounded-3xl shadow-2xl max-w-xs border-4 border-white">
              <p className="text-sm uppercase tracking-widest font-bold mb-2">Patent Authority</p>
              <p className="text-2xl font-bold">SE540848C2</p>
              <p className="text-green-100 text-sm mt-2">Verified thermal insulation barrier.</p>
            </div>
          </div>

          {/* Specs Side */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Official Specifications
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              The World&apos;s Smartest <br />
              <span className="text-green-600">Thermal Barrier.</span>
            </h1>

            <div className="space-y-8 mb-12">
              {[
                { icon: History, title: "Heritage Ready", desc: "Explicitly designed for listed buildings where double/triple glazing is prohibited. No structural changes required." },
                { icon: Moon, title: "Total Light Control", desc: "100% blackout capability combined with automated thermal management." },
                { icon: ShieldAlert, title: "Fire Safety", desc: "Certified European flame retardant standards (B-s1, d0)." },
                { icon: Ruler, title: "Bespoke Precision", desc: "Made-to-measure within 1mm accuracy for perfect thermal sealing." },
              ].map((spec, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <spec.icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{spec.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full md:w-auto bg-gray-900 text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-green-700 transition-all shadow-xl shadow-gray-200">
              Order Now
            </button>
          </div>
        </div>

        {/* Integrated High-Tech Component */}
        <div className="mt-12">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Deep Technical Integration</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Explore the intersection of Swedish craftsmanship and cutting-edge IoT thermal technology.</p>
           </div>
           <SmartProductSpecs />
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
