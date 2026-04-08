import { NextResponse } from "next/server";

// Static export: authentication is not used in the static site
export const dynamic = "force-static";

export async function POST() {
  return NextResponse.json({ message: "Not available in static export" }, { status: 404 });
}
