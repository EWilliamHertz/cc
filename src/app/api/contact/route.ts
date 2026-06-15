export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json({ message: "Message sent successfully", id: newMessage.id }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
