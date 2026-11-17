import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="page">
      <PageHeader
        crumbs={["About Us"]}
        title="Overview"
        text="A young company shaped by the toughest of starts — and committed to a more sustainable way of building."
      />

      <section className="sec">
        <div className="wrap story">
          <div className="story-copy">
            <span className="eyebrow rv">Future Ready…</span>
            <h2 className="rv d1">Born into a lockdown. Built to adapt.</h2>
            <p className="rv">Our journey started just before COVID-19 arrived on the Indian shores, which led to a nationwide lockdown and the unprecedented experiences that followed.</p>
            <p className="rv">In our very first project, we had to face the toughest of challenges. Its successful completion is a testimony to our ability to adapt in a very short time to the new normal without compromising on efficiency.</p>
            <p className="rv">The unexpected pause caused by the worldwide lockdown not only gave the natural environment a chance to recover, but also gave us an opportunity to rethink our approach to building a more sustainable future.</p>
            <p className="rv">We at SARUS have committed ourselves to achieve this by following practices that strike a balance between sustainability and the ability to face challenges such as COVID-19 — and be <strong>Future Ready</strong>.</p>
          </div>
          <div className="story-media rv d1">
            <img src="https://sarus.co.in/wp-content/uploads/2023/03/Future-Ready1209X804.webp" alt="SARUS — Future Ready" loading="lazy" />
            <div className="timeline-note">Pre-COVID · Lockdown · First project delivered</div>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <div className="left rv"><span className="eyebrow">Purpose</span><h2>Vision &amp; Mission</h2></div>
          </div>
          <div className="vm">
            <article className="vm-card on-dark rv">
              <img src="https://sarus.co.in/wp-content/uploads/2023/03/matt-duncan-IUY_3DvM__w-unsplash-1536x923.jpg" alt="Highway interchange" loading="lazy" />
              <div className="body">
                <span className="k">Vision</span>
                <h3>World-class, sustainably</h3>
                <p>To become a world-class engineering and infrastructure company while implementing the best engineering practices for a sustainable future, while endeavouring to exceed the expectations of all stakeholders.</p>
              </div>
            </article>
            <article className="vm-card on-dark rv d1">
              <img src="https://sarus.co.in/wp-content/uploads/2023/03/shawn-ang-vdBE638sszE-unsplash-1536x1024.jpg" alt="Road through landscape" loading="lazy" />
              <div className="body">
                <span className="k">Mission</span>
                <h3>Part of India&apos;s growth story</h3>
                <ul>
                  <li>To become a key pillar in the infrastructure industry and part of India&apos;s growth story.</li>
                  <li>To practise and implement the highest standards of professionalism as an organisation.</li>
                  <li>To keep expanding our activity base and diversify into other infrastructure sectors.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sec values-sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="left rv"><span className="eyebrow">Our Values</span><h2>What we stand on</h2></div>
            <p className="lead rv d1" style={{ maxWidth: 420 }}>At SARUS, we strive to deliver excellence to all our stakeholders.</p>
          </div>
          <div className="values">
            <div className="value rv"><span className="icon"><Icon name="medal" /></span><h4>Excellence</h4><p>The best quality, on even the most complex projects.</p></div>
            <div className="value rv d1"><span className="icon"><Icon name="chip" /></span><h4>Technology</h4><p>Latest advancements in road construction and maintenance.</p></div>
            <div className="value rv d2"><span className="icon"><Icon name="team" /></span><h4>Team Work</h4><p>An experienced team that adapts fast and delivers together.</p></div>
            <div className="value rv d3"><span className="icon"><Icon name="leaf" /></span><h4>Sustainability</h4><p>Building in balance with the environment we work in.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
