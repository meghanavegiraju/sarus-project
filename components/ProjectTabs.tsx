"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { OTHER_PROJECTS, OUR_PROJECTS, type Project } from "@/lib/site";

function ProjectCard({ p, reveal }: { p: Project; reveal: boolean }) {
  const cls = ["project", p.image ? "" : "no-img", reveal ? "rv" : ""].filter(Boolean).join(" ");
  return (
    <article className={cls}>
      {p.image && (
        <div className="project-media">
          <img src={p.image} alt={p.alt} loading="lazy" />
          {p.nh && <span className="nh">{p.nh}</span>}
        </div>
      )}
      <div className="project-body">
        {p.sign && (
          <div className="sign"><div><small>{p.sign.small}</small><b>{p.sign.big}</b></div></div>
        )}
        <span className="state">{p.state}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="chain"><span>{p.chainFrom}</span><span className="road"></span><span>{p.chainTo}</span></div>
        <div className="facts">
          <div><b>{p.duration}</b><span>Duration</span></div>
          <div><b>{p.value}</b><span>Contract value</span></div>
        </div>
      </div>
    </article>
  );
}

const TABS = [
  { id: "our", label: "Our Projects", items: OUR_PROJECTS, reveal: true },
  { id: "other", label: "Other Projects", items: OTHER_PROJECTS, reveal: false },
] as const;

export default function ProjectTabs() {
  const [active, setActive] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    setActive(i);
    // Panels hidden at load never intersect, so reveal their items immediately.
    document.querySelectorAll(`#tp-${TABS[i].id} .rv`).forEach((el) => el.classList.add("in"));
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length;
    btns.current[n]?.focus();
    select(n);
  };

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div className="left rv"><span className="eyebrow">Portfolio</span><h2>Our projects</h2></div>
          <div className="tabs rv d1" role="tablist" aria-label="Project lists">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => { btns.current[i] = el; }}
                role="tab"
                id={`tab-${t.id}`}
                aria-controls={`tp-${t.id}`}
                aria-selected={active === i}
                tabIndex={active === i ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                {t.label} <span>{t.items.length}</span>
              </button>
            ))}
          </div>
        </div>
        {TABS.map((t, i) => (
          <div
            key={t.id}
            className="tabpanel projects"
            id={`tp-${t.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${t.id}`}
            hidden={active !== i}
          >
            {t.items.map((p) => <ProjectCard key={p.title} p={p} reveal={t.reveal} />)}
          </div>
        ))}
      </div>
    </section>
  );
}
