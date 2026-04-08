import { NextResponse } from "next/server";

// Static export: this route is not used in the static site
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ error: "Not available in static export" }, { status: 404 });
}
