import { NextResponse } from "next/server";
import * as z from "zod";

const leadSchema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  facilitySize: z.string().min(1),
  region: z.string().min(1),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate the payload
    const validatedData = leadSchema.parse(body);

    // In a real production environment, we would save to Prisma here:
    // await prisma.lead.create({ data: validatedData });
    
    console.log("New B2B Lead Received:", validatedData);

    return NextResponse.json(
      { message: "Lead submitted successfully", id: "mock-id-123" },
      { status: 201 }
    );
} catch (error) {
    if (error instanceof z.ZodError) {
      // Force TypeScript to accept the property by casting to any
      return NextResponse.json({ errors: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }