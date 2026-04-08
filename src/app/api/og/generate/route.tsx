import { NextResponse } from "next/server";

// Static export: OG images are served as static files from /images/og/
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ error: "Not available in static export" }, { status: 404 });
}
