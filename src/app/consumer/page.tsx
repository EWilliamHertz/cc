"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import EnergyCalculator from "@/components/EnergyCalculator";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function ConsumerLanding() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" 
            alt="Modern Interior"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-green-600 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6"
          >
            Residential Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Sustainable Luxury for <br />
            <span className="text-green-500">Every Home.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Protect your home from rising energy costs. Our patented thermal curtains provide superior insulation while maintaining your property&apos;s architectural integrity.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/consumer/product"
              className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-green-600 hover:text-white transition-all shadow-2xl"
            >
              View Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight text-gray-900">Why Homeowners Choose Climate Curtains?</h2>
              <div className="space-y-8">
                {[
                  { title: "Immediate Comfort", desc: "Reduce drafts and maintain a stable indoor temperature year-round." },
                  { title: "Noise Reduction", desc: "The multi-layer thermal barrier also acts as a high-performance acoustic dampener." },
                  { title: "UV Protection", desc: "Protect your furniture and art from harmful UV fading while allowing controlled natural light." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80" 
                alt="Cozy Home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Calculate Your Residential Savings</h2>
            <p className="text-gray-600">See how much you could save on your energy bills this year.</p>
          </div>
          <EnergyCalculator />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
