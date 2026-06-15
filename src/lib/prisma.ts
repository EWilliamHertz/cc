import { PrismaClient } from "@prisma/client";

// This check prevents Prisma from initializing during build time.
// It will only initialize when the server is actually running.
const isBuild = process.env.NEXT_PHASE === 'phase-production-build';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma || (isBuild ? {} as PrismaClient : new PrismaClient());

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}