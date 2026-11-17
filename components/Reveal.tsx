"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds `.in` to `.rv` elements as they scroll into view (the reveal animation).
// A MutationObserver picks up elements rendered after navigation.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const all = () => Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      all().forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const scan = () => all().forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
