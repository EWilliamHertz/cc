import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // MOCK AUTH LOGIC
    // In production, verify against DB and hashed passwords
    if (email === "investor@vc-firm.com" && password === "climate2026") {
      
      // Create a mock JWT-like structure
      const mockToken = "secure-data-room-session-token";

      // Set HttpOnly cookie for security
      (await cookies()).set("investor_auth", mockToken, {
        httpOnly: true,
        secure: process.env.NODE_SET === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return NextResponse.json({ message: "Authenticated successfully" });
    }

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE() {
  (await cookies()).delete("investor_auth");
  return NextResponse.json({ message: "Logged out" });
}
