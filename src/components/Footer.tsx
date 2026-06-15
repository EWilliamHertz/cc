import React from "react";
import Link from "next/link";
import { Leaf, Award, Globe, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                CLIMATE CURTAINS
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pioneering Swedish thermal technology to reduce global building energy consumption. Patented SE540848C2.
            </p>
            <div className="flex gap-4">
              <Award className="w-5 h-5 text-gray-400" />
              <Globe className="w-5 h-5 text-gray-400" />
              <ShieldCheck className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/consumer" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Residential Savings</Link></li>
              <li><Link href="/retail" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Commercial Efficiency</Link></li>
              <li><Link href="/invest" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Investor</Link></li>
            </ul>
          </div>

          {/* Validation */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Scientific Validation</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Chalmers University Studies</li>
              <li>Vinnova Research Funding</li>
              <li>U-Value Improvement Matrix</li>
              <li>SE540848C2 Patent Details</li>
            </ul>
          </div>

          {/* Contact & Reg */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Corporate</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Climate Curtains AB</li>
              <li>Org No: 559001-9534</li>
              <li>Stockholm, Sweden</li>
              <li className="font-medium text-gray-900">peter@climatecurtains.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Climate Curtains AB. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/admin" className="opacity-0 cursor-default">Admin</Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-900">Cookie Policy</Link>
            <Link href="/gdpr" className="text-xs text-gray-500 hover:text-gray-900">GDPR Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
