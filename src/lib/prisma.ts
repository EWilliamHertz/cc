// new code
// new code
import { PrismaClient } from "@prisma/client";




// Reverting to the simplest instantiation. Next.js Turbopack has a known bug 
// where passing an options object accidentally triggers the Edge runtime validation.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };




// new code
export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});




if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;