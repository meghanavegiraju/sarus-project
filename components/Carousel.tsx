"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { SLIDES } from "@/lib/site";

export default function Carousel() {
  const track = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState({ width: 25, x: 0 });

  const update = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    const vis = t.clientWidth / t.scrollWidth;
    setBar({ width: vis * 100, x: max ? (t.scrollLeft / max) * ((1 - vis) / vis) * 100 : 0 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const t = track.current;
    const first = t?.firstElementChild;
    if (!t || !first) return;
    t.scrollBy({ left: dir * (first.getBoundingClientRect().width + 22), behavior: "smooth" });
  };

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div className="left rv">
            <span className="eyebrow">Projects</span>
            <h2>On the ground</h2>
          </div>
          <div className="ctrl rv d1">
            <button aria-label="Previous" onClick={() => go(-1)}><Icon name="left" /></button>
            <button aria-label="Next" onClick={() => go(1)}><Icon name="arrow" /></button>
          </div>
        </div>
        <div className="carousel rv">
          <div className="track" ref={track} onScroll={update}>
            {SLIDES.map((s) => (
              <Link href="/highways" className="slide" key={s.src}>
                <figure>
                  <img src={s.src} alt={s.alt} loading="lazy" />
                  <figcaption><i></i>{s.label}</figcaption>
                </figure>
              </Link>
            ))}
          </div>
          <div className="progress">
            <i style={{ width: `${bar.width}%`, transform: `translateX(${bar.x}%)` }}></i>
          </div>
        </div>
      </div>
    </section>
  );
}
