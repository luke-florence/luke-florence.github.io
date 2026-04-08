import { NextResponse } from "next/server";

// Static export: authentication is not used in the static site
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
