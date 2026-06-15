"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Home } from "lucide-react";
import EnergyCalculator from "@/components/EnergyCalculator";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Optimized Image Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" 
            alt="Swedish Design Interior"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-900/50 to-black/80"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Conserve Energy. <br />
            <span className="text-green-500">Preserve Culture.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience the world&apos;s most advanced patented thermal roller blinds. Reduce window heat loss by up to 50% without altering your home&apos;s historic aesthetic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/consumer"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-green-900/20"
            >
              Residential Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/retail"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              Commercial Portal
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Swiss Engineering meets Swedish Innovation</h2>
            <div className="h-1 w-20 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "15-50% Efficiency", desc: "Drastic reduction in thermal transmittance through windows." },
              { icon: Shield, title: "Patented SE540848C2", desc: "Unique high-performance technology validated by Chalmers University." },
              { icon: Home, title: "Zero Renovation", desc: "Perfect for historic and listed buildings where triple glazing is forbidden." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-2xl hover:shadow-green-900/5 transition-all"
              >
                <feature.icon className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <EnergyCalculator />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
