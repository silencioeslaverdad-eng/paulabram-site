import { useEffect } from "react";
import { site } from "@/config";

export default function Seo({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : site.title;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", description ?? site.description);
  }, [title, description]);
  return null;
}

export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
