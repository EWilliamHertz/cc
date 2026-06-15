"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Direct Inquiries</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have a specific question about our thermal technology or global expansion? Reach out directly to our team. All messages are reviewed by Peter and the executive board.
            </p>
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
               <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Corporate Correspondence</p>
               <p className="text-2xl font-bold text-gray-900">peter@climatecurtains.com</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
               {isSuccess ? (
                 <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Message Delivered</h3>
                    <p className="text-gray-600 mb-8">We have received your inquiry and will respond to peter@climatecurtains.com.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-green-600 font-bold hover:underline">Send another message</button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <input 
                         {...register("name", { required: true })}
                         placeholder="Your Name"
                         className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-600 outline-none"
                       />
                       <input 
                         {...register("email", { required: true })}
                         type="email"
                         placeholder="Your Email"
                         className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-600 outline-none"
                       />
                    </div>
                    <input 
                       {...register("subject")}
                       placeholder="Subject"
                       className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-600 outline-none"
                    />
                    <textarea 
                       {...register("message", { required: true })}
                       rows={4}
                       placeholder="Your Message..."
                       className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-600 outline-none resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Message <Send className="w-5 h-5" /></>}
                    </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
