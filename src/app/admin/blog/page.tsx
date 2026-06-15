"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Upload, ArrowLeft, Edit3, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogFormData {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  authorName: string;
  customCreatedAt?: string;
  coverImage?: string;
}

interface BlogPost extends BlogFormData {
  id: string;
  createdAt: string;
}

const BlogManager = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<BlogFormData>();

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        if (mounted && Array.isArray(data)) setPosts(data);
      } catch (err) {
        console.error("Failed to load posts", err);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    if (Array.isArray(data)) setPosts(data);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      // ImgBB API call
      const response = await fetch(`https://api.imgbb.com/1/upload?key=b2492f987920d3e2a7903861b72ae3a4`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setCoverImage(data.data.url);
      }
    } catch (error) {
      console.error("Image upload failed", error);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    const method = editingPost ? "PUT" : "POST";
    const payload = editingPost ? { ...data, id: editingPost.id, coverImage } : { ...data, coverImage };

    try {
      const response = await fetch("/api/blog", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setCoverImage(null);
        setEditingPost(null);
        fetchPosts();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          alert(`Failed to save post: ${errorData.error || 'Internal Server Error'}`);
        } else {
          // If Next.js returns an HTML compilation error page, catch it here
          const errorText = await response.text();
          console.error("Server returned non-JSON error:", errorText);
          alert("Server compilation error. Check your Next.js terminal for details.");
        }
      }
    } catch (error) {
      console.error("Failed to save post", error);
      alert("A network error occurred while communicating with the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const startEdit = (post: BlogPost) => {
    setEditingPost(post);
    setValue("title", post.title);
    setValue("excerpt", post.excerpt);
    setValue("content", post.content);
    setValue("authorName", post.authorName);
    if (post.customCreatedAt) {
       setValue("customCreatedAt", new Date(post.customCreatedAt).toISOString().split('T')[0]);
    }
    setCoverImage(post.coverImage || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deletePost = async (id: string) => {
     if (!confirm("Are you sure?")) return;
     await fetch(`/api/blog?id=${id}`, { method: 'DELETE' });
     fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/admin" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 font-bold text-sm uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Editor Part */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              {editingPost ? <Edit3 className="w-6 h-6 text-green-600" /> : <Plus className="w-6 h-6 text-green-600" />}
              {editingPost ? "Edit Insight" : "Create New Insight"}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 flex justify-between">
                  <span>Article Title</span>
                  {errors.title && <span className="text-red-500 lowercase">*Required</span>}
                </label>
                <input
                  {...register("title", { required: true })}
                  className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.title ? 'border-red-400' : 'border-gray-100'} focus:border-green-600 outline-none transition-all`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Original Post Date</label>
                    <input
                      type="date"
                      {...register("customCreatedAt")}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-green-600 outline-none transition-all"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Cover Image</label>
                    <div className="relative">
                       <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                       <div className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-dashed border-gray-300 flex items-center gap-3 text-gray-500 overflow-hidden min-h-[64px]">
                          {isUploading ? (
                             <Loader2 className="w-5 h-5 animate-spin text-green-600" />
                          ) : coverImage ? (
                             <div className="flex items-center gap-3 w-full">
                                
                                <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                                   <img src={coverImage} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-bold text-green-600 truncate">Image Ready</span>
                             </div>
                          ) : (
                             <>
                                <Upload className="w-5 h-5" />
                                <span className="text-sm font-medium">Upload to ImgBB...</span>
                             </>
                          )}
                       </div>
                    </div>
                 </div>
              </div>

              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 flex justify-between">
                  <span>Short Excerpt (SEO)</span>
                  {errors.excerpt && <span className="text-red-500 lowercase">*Required</span>}
                </label>
                <textarea
                  {...register("excerpt", { required: true })}
                  rows={2}
                  className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.excerpt ? 'border-red-400' : 'border-gray-100'} focus:border-green-600 outline-none transition-all resize-none`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 flex justify-between">
                  <span>Article Content</span>
                  {errors.content && <span className="text-red-500 lowercase">*Required</span>}
                </label>
                <textarea
                  {...register("content", { required: true })}
                  rows={8}
                  className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.content ? 'border-red-400' : 'border-gray-100'} focus:border-green-600 outline-none transition-all resize-none`}
                />
              </div>

              <div className="flex gap-4">
                 <button
                   type="submit"
                   disabled={isSubmitting || isUploading}
                   className="flex-grow bg-gray-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all disabled:opacity-50"
                 >
                   {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : editingPost ? "Update Post" : "Publish Now"}
                 </button>
                 {editingPost && (
                   <button 
                    type="button"
                    onClick={() => { setEditingPost(null); reset(); setCoverImage(null); }}
                    className="px-8 bg-gray-100 text-gray-600 rounded-2xl font-bold"
                   >
                     Cancel
                   </button>
                 )}
              </div>
              {isSuccess && <p className="text-green-600 text-center font-bold">Successfully saved!</p>}
            </form>
          </div>

          {/* List Part */}
          <div className="space-y-6">
             <h2 className="text-xl font-bold text-gray-900 px-2 uppercase tracking-widest">Existing Insights</h2>
             <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                {posts.map(post => (
                  <div key={post.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center group">
                     <div className="flex-grow min-w-0 text-left">
                        <h3 className="font-bold text-gray-900 truncate">{post.title}</h3>
                        <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">
                          {new Date(post.customCreatedAt || post.createdAt).toLocaleDateString()}
                        </p>
                     </div>
                     <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => startEdit(post)}
                          className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:bg-green-600 hover:text-white transition-all"
                        >
                           <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deletePost(post.id)}
                          className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:bg-red-600 hover:text-white transition-all"
                        >
                           <Trash2 className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
