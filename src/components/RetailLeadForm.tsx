"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, CheckCircle } from "lucide-react";

const leadSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  facilitySize: z.string().min(1, "Approximate square footage is required"),
  region: z.string().min(1, "Please select a geographic region"),
  notes: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

const RetailLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
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

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-green-100 text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Received</h3>
        <p className="text-gray-600 mb-8">
          An Industrial Efficiency Consultant will review your facility profile and contact you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-green-600 font-bold hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Bulk Procurement Inquiry</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Company Name</label>
            <input
              {...register("companyName")}
              placeholder="e.g. Nordic Logistics AB"
              className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border transition-all outline-none ${
                errors.companyName ? "border-red-500" : "border-gray-100 focus:border-green-600"
              }`}
            />
            {errors.companyName && <p className="text-xs text-red-500 font-medium px-1">{errors.companyName.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Contact Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="procurement@company.com"
              className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border transition-all outline-none ${
                errors.email ? "border-red-500" : "border-gray-100 focus:border-green-600"
              }`}
            />
            {errors.email && <p className="text-xs text-red-500 font-medium px-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Total Facility Size (m²)</label>
            <input
              {...register("facilitySize")}
              placeholder="e.g. 5,000"
              className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border transition-all outline-none ${
                errors.facilitySize ? "border-red-500" : "border-gray-100 focus:border-green-600"
              }`}
            />
            {errors.facilitySize && <p className="text-xs text-red-500 font-medium px-1">{errors.facilitySize.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Region</label>
            <select
              {...register("region")}
              className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border transition-all outline-none appearance-none ${
                errors.region ? "border-red-500" : "border-gray-100 focus:border-green-600"
              }`}
            >
              <option value="">Select Region...</option>
              <option value="nordics">Nordics & Scandinavia</option>
              <option value="europe">Rest of Europe</option>
              <option value="apac">Asia Pacific</option>
              <option value="na">North America</option>
            </select>
            {errors.region && <p className="text-xs text-red-500 font-medium px-1">{errors.region.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Additional Project Details</label>
          <textarea
            {...register("notes")}
            rows={4}
            placeholder="Special requirements for listed or historic buildings..."
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-600 transition-all outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Request Industrial Quote <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default RetailLeadForm;
