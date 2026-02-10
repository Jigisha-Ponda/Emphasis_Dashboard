// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";

export const dynamic = "force-dynamic";



export async function GET(req: Request) {
  const { authOptions } = await import("@/lib/auth");
  const handler = NextAuth(authOptions);
  return handler(req);
}

export async function POST(req: Request) {
  const { authOptions } = await import("@/lib/auth");
  const handler = NextAuth(authOptions);
  return handler(req);
}
