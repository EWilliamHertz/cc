import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { 
        customCreatedAt: "desc", // Sort by back-date first
      },
    });
    // Fallback sorting logic if customCreatedAt is null
    const sorted = posts.sort((a: any, b: any) => {
      const dateA = a.customCreatedAt || a.createdAt;
      const dateB = b.customCreatedAt || b.createdAt;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
    return NextResponse.json(sorted);
  } catch {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, excerpt, content, coverImage, authorName, customCreatedAt } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const newPost = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || title,
        content,
        coverImage,
        authorName: authorName || "Peter",
        customCreatedAt: customCreatedAt ? new Date(customCreatedAt) : null,
        published: true,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Blog API error:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, title, excerpt, content, coverImage, authorName, customCreatedAt } = await req.json();

    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        excerpt,
        content,
        coverImage,
        authorName,
        customCreatedAt: customCreatedAt ? new Date(customCreatedAt) : null,
      },
    });

    return NextResponse.json(updatedPost);
  } catch {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ message: "Post deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
