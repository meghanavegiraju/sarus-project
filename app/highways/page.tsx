import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectTabs from "@/components/ProjectTabs";

export const metadata: Metadata = { title: "Highways" };

export default function HighwaysPage() {
  return (
    <div className="page">
      <PageHeader
        crumbs={["Projects", "Highways"]}
        title="Highways"
        text="Safer, sustainable road networks — from new corridors to the rehabilitation of national highways."
      />

      <section className="sec">
        <div className="wrap intro-grid">
          <div className="media rv">
            <img src="https://sarus.co.in/wp-content/uploads/2023/03/Mask-Group-5-1-522x652-1.png" alt="Highway construction" loading="lazy" />
          </div>
          <div className="intro-copy">
            <span className="eyebrow rv">The road sector</span>
            <p className="pull rv d1">A proper highway network is vital for the swift economic growth of a nation.</p>
            <p className="rv">It is important to embrace new technologies to make roads safer and sustainable by reducing their impact on the environment. With a paradigm shift in the government&apos;s approach, the road sector is witnessing a major overhaul.</p>
            <p className="rv">At <strong>SARUS</strong>, our endeavour is to emerge as a leader in the ever-transforming road sector by providing the best solutions to the most complex issues, without losing our focus on sustainability and investor interests.</p>
          </div>
        </div>
      </section>

      <section className="sec sec-dark on-dark">
        <div className="wrap">
          <div className="sec-head"><div className="left rv"><span className="eyebrow">Capabilities</span><h2>Two kinds of roads</h2></div></div>
          <div className="types">
            <div className="type rv"><span className="k">New build</span><h3>Greenfield Projects</h3><p>We have a very experienced team that has the wherewithal to handle even the most complex projects.</p></div>
            <div className="type rv d1"><span className="k">Upgrade &amp; rehab</span><h3>Brownfield Projects</h3><p>We are up to date with the latest technological advancements in improving the quality of roads, and have mastered implementing innovative technologies for sustainable solutions.</p></div>
            <div className="img rv d2"><img src="https://sarus.co.in/wp-content/uploads/2023/03/photo-1505082527911-33423132c73d.png" alt="Road surface" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <ProjectTabs />
    </div>
  );
}
