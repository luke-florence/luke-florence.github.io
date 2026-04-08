import { notFound } from "next/navigation";

export async function generateMetadata() {
  return {};
}

export default function Blog() {
  notFound();
}
