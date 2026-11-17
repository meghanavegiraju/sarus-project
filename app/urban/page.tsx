import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Urban Infrastructure" };

export default function UrbanPage() {
  return (
    <div className="page">
      <PageHeader
        crumbs={["Projects", "Urban Infrastructure"]}
        title={<>Urban<br />Infrastructure</>}
        text="Rejuvenating rivers and building the roads that run beside them."
      />

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><div className="left rv"><span className="eyebrow">Our Projects</span><h2>Featured project</h2></div></div>
          <article className="feature rv">
            <div className="feature-media">
              <img src="https://sarus.co.in/wp-content/uploads/2023/04/urban-infra-1536x727.jpg" alt="Mula Mutha river development, Pune" loading="lazy" />
              <span className="ppp">PPP · Development Credit Note</span>
            </div>
            <div className="feature-body">
              <div>
                <span className="eyebrow">Pune · Maharashtra</span>
                <h3>Development of Mula Mutha River</h3>
                <p>Development of the Mula Mutha River from Bund Garden to Mundhwa Bridge (Stretch 10 &amp; 11) under the Pune River Rejuvenation Project, and construction &amp; development of the riverside road from Bund Garden bridge to Mundhwa (RHS), on a Public Private Partnership (PPP) model against Development Credit Note.</p>
              </div>
              <div className="kv">
                <div><span>Duration</span><b>3 Years</b></div>
                <div><span>Value</span><b>₹422 Cr</b></div>
                <div><span>Stretch</span><b>10 &amp; 11</b></div>
                <div><span>Model</span><b>PPP</b></div>
              </div>
            </div>
          </article>
          <div style={{ marginTop: 40 }} className="rv">
            <Link href="/gallery" className="link-arrow">See site photos in the gallery <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
