"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { GALLERY } from "@/lib/site";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Gallery() {
  const [cur, setCur] = useState<number | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const touchX = useRef(0);
  const n = GALLERY.length;
  const open = cur !== null;

  const show = useCallback((i: number) => setCur(((i % n) + n) % n), [n]);

  const openLb = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    show(i);
  };

  const closeLb = useCallback(() => {
    setCur(null);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight") setCur((c) => (c === null ? c : (c + 1) % n));
      if (e.key === "ArrowLeft") setCur((c) => (c === null ? c : (c - 1 + n) % n));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, closeLb, n]);

  return (
    <>
      <div className="masonry">
        {GALLERY.map((src, i) => (
          <button key={src} className="rv" aria-label={`Open photo ${i + 1} of ${n}`} onClick={() => openLb(i)}>
            <img src={src} alt={`SARUS site photo ${i + 1}`} loading="lazy" />
            <span className="zoom"><Icon name="zoom" /></span>
          </button>
        ))}
      </div>

      <div
        className={`lightbox${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const d = e.changedTouches[0].clientX - touchX.current;
          if (open && Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1));
        }}
      >
        <span className="lb-count">{open ? `${pad(cur + 1)} / ${pad(n)}` : ""}</span>
        {open && <img src={GALLERY[cur]} alt={`SARUS site photo ${cur + 1}`} />}
        <button ref={closeBtn} className="lb-btn lb-close" aria-label="Close" onClick={closeLb}><Icon name="close" /></button>
        <button className="lb-btn lb-prev" aria-label="Previous image" onClick={() => open && show(cur - 1)}><Icon name="left" /></button>
        <button className="lb-btn lb-next" aria-label="Next image" onClick={() => open && show(cur + 1)}><Icon name="arrow" /></button>
      </div>
    </>
  );
}
