// new code
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

// This function acts as a vault. It will NOT run during the build process.
const getPrisma = () => {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  return globalForPrisma.prisma;
};

// We export a "Proxy" instead of the actual client. 
// Vercel's builder sees the Proxy and ignores it.
export const prisma = new Proxy({} as PrismaClient, {
  get: (_, prop) => {
    const client = getPrisma();
    const targetProp = client[prop as keyof PrismaClient];
    
    // Bind functions to preserve their internal 'this' context
    if (typeof targetProp === "function") {
      return targetProp.bind(client);
    }
    return targetProp;
  },
});

// Populate global instance immediately in local development to prevent hot-reload memory leaks
if (process.env.NODE_ENV !== "production") {
  getPrisma();
}