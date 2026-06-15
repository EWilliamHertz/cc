"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, MessageSquare, Mail, Calendar, Trash2 } from "lucide-react";
import Link from "next/link";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setMessages(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 font-bold text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <header className="mb-12">
           <h1 className="text-3xl font-bold text-gray-900">Contact Inquiries</h1>
           <p className="text-gray-500 mt-2">Messages submitted via the contact forms.</p>
        </header>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-white rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white p-20 rounded-[3rem] border border-gray-100 text-center">
             <MessageSquare className="w-12 h-12 text-gray-200 mx-auto mb-4" />
             <p className="text-gray-500 font-medium">No messages yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                       <h3 className="text-lg font-bold text-gray-900">{msg.subject || "No Subject"}</h3>
                       <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5 font-medium"><Mail className="w-4 h-4" /> {msg.email}</span>
                          <span className="flex items-center gap-1.5 font-medium"><Calendar className="w-4 h-4" /> {new Date(msg.createdAt).toLocaleDateString()}</span>
                       </div>
                    </div>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                       <Trash2 className="w-5 h-5" />
                    </button>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-2xl text-gray-700 leading-relaxed italic">
                    &quot;{msg.message}&quot;
                 </div>
                 <div className="mt-6 flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sender: {msg.name}</span>
                    <a href={`mailto:${msg.email}`} className="text-sm font-bold text-green-600 hover:underline">Reply Directly</a>
                 </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
