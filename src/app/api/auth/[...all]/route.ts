// import { auth } from "@/lib/auth"; // path to your auth file
// import { toNextJsHandler } from "better-auth/next-js";
// export const { POST, GET } = toNextJsHandler(auth);

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Auth temporarily disabled" });
}

export async function POST() {
  return NextResponse.json({ message: "Auth temporarily disabled" });
}