// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

// ✅ Export as GET & POST for App Router
export { handler as GET, handler as POST };
