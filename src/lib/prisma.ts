import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Only instantiate if we are not in a build/pre-render environment or if DATABASE_URL exists
export const prisma = globalForPrisma.prisma || new PrismaClient({
  // This ensures the client is instantiated safely
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "postgresql://placeholder",
    },
  },
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;