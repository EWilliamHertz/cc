"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, Settings, LogOut, ExternalLink } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-8 flex flex-col gap-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tight">Admin Portal</span>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
            { name: "Manage Blog", href: "/admin/blog", icon: FileText },
            { name: "Messages", href: "/admin/messages", icon: MessageSquare },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white">
            <ExternalLink className="w-5 h-5" />
            <span className="text-sm font-medium">View Site</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-12">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Executive Overview</h1>
            <p className="text-gray-500 mt-2">Welcome back, Admin.</p>
          </div>
          <div className="text-right">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Last Update</p>
             <p className="text-sm font-bold text-gray-900">{new Date().toLocaleDateString()}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Total Posts", value: "0", icon: FileText, color: "text-blue-600" },
            { label: "Unread Messages", value: "0", icon: MessageSquare, color: "text-green-600" },
            { label: "Site Visitors", value: "1,204", icon: LayoutDashboard, color: "text-purple-600" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
               <stat.icon className={`w-8 h-8 ${stat.color} mb-6`} />
               <p className="text-3xl font-black text-gray-900">{stat.value}</p>
               <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8">
           <h2 className="text-xl font-bold mb-8">Quick Actions</h2>
           <div className="flex gap-4">
              <Link 
                href="/admin/blog"
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all"
              >
                Create New Post
              </Link>
              <Link 
                href="/admin/messages"
                className="bg-white border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all"
              >
                Review Messages
              </Link>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
