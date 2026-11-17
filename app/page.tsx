import Link from "next/link";
import Icon from "@/components/Icon";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-media">
          <img src="/images/hero.jpg" alt="Aerial view of a wide urban boulevard with a tram line and glass towers" fetchPriority="high" />
        </div>
        <div className="wrap hero-inner">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>SARUS Infrastructures Pvt. Ltd.</span>
          <h1 style={{ marginTop: 22 }}>
            <span className="line"><span>Future</span></span>
            <span className="line"><span>Ready<em>.</em></span></span>
          </h1>
          <div className="hero-row">
            <p>Safer, sustainable highways and urban infrastructure — engineered by a team that delivers quality on time, with the latest road technology.</p>
            <div className="hero-ctas">
              <Link href="/highways" className="btn btn-gold">Explore projects <Icon name="arrow" /></Link>
              <Link href="/about" className="btn btn-ghost" style={{ color: "#fff" }}>Our story</Link>
            </div>
          </div>
          <div className="lane" aria-hidden="true"></div>
        </div>
      </section>

      <section className="stats on-dark" aria-label="At a glance">
        <div className="wrap stats-grid">
          <div className="stat rv"><b>552<small>Cr+</small></b><span>Worth of works executed</span></div>
          <div className="stat rv d1"><b>100<small>km</small></b><span>Longest single stretch · NH-34</span></div>
          <div className="stat rv d2"><b>05</b><span>Major projects</span></div>
          <div className="stat rv d3"><b>04</b><span>States · WB · AP · KA · MH</span></div>
        </div>
      </section>

      {/* Sectors */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="left rv">
              <span className="eyebrow">Sectors</span>
              <h2>Where we build</h2>
            </div>
            <p className="lead rv d1" style={{ maxWidth: 420 }}>Safer and sustainable highway networks, and the urban infrastructure that cities grow around. We build them.</p>
          </div>
          <div className="sectors">
            <Link href="/highways" className="sector rv">
              <img src="https://sarus.co.in/wp-content/uploads/2021/02/project-4@2x-1.jpg" alt="Highway under construction" loading="lazy" />
              <span className="go"><Icon name="arrow" /></span>
              <div className="body">
                <span className="tag">01 · Highways</span>
                <h3>Highways</h3>
                <p>Safer and sustainable highway network. We build them — greenfield corridors and brownfield rehabilitation.</p>
              </div>
            </Link>
            <Link href="/urban" className="sector rv d1">
              <img src="https://sarus.co.in/wp-content/uploads/2023/04/urban-infra-1536x727.jpg" alt="Mula Mutha river development, Pune" loading="lazy" />
              <span className="go"><Icon name="arrow" /></span>
              <div className="body">
                <span className="tag">02 · Urban</span>
                <h3>Urban Infrastructure</h3>
                <p>River rejuvenation and riverside roads, delivered on a PPP model.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Future ready */}
      <section className="sec sec-white">
        <div className="wrap split">
          <div className="split-media rv">
            <img src="https://sarus.co.in/wp-content/uploads/2023/03/Future-Ready1209X804.webp" alt="SARUS team on a highway site" loading="lazy" />
            <div className="badge"><small>Est. pre-COVID-19</small>Built to adapt</div>
          </div>
          <div className="split-copy">
            <span className="eyebrow rv">Future Ready</span>
            <h2 className="rv d1">Sustainable by practice, resilient by design.</h2>
            <p className="lead rv d2">SARUS has committed itself to practices that strike a balance between sustainability and the ability to face challenges such as COVID-19 — and be Future Ready.</p>
            <div className="rv d3"><Link href="/about" className="link-arrow">Read more <Icon name="arrow" /></Link></div>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="sec sec-dark on-dark">
        <div className="wrap">
          <div className="sec-head">
            <div className="left rv">
              <span className="eyebrow">Specialization</span>
              <h2>What sets us apart</h2>
            </div>
          </div>
          <div className="spec-grid">
            <article className="spec rv">
              <span className="num">01</span>
              <span className="icon"><Icon name="medal" /></span>
              <h3>Quality</h3>
              <p>We have an experienced team with the wherewithal to handle the most complex projects, and we deliver the best quality.</p>
              <Link href="/about" className="link-arrow">Read more <Icon name="arrow" /></Link>
            </article>
            <article className="spec rv d1">
              <span className="num">02</span>
              <span className="icon"><Icon name="clock" /></span>
              <h3>Timeline</h3>
              <p>No matter how big or small the project is, we adhere to the timelines passionately and make it happen.</p>
              <Link href="/highways" className="link-arrow">Read more <Icon name="arrow" /></Link>
            </article>
            <article className="spec rv d2">
              <span className="num">03</span>
              <span className="icon"><Icon name="chip" /></span>
              <h3>Technology</h3>
              <p>We are up to date with the latest technological advancements in road maintenance, and we are always Future Ready.</p>
              <Link href="/highways" className="link-arrow">Read more <Icon name="arrow" /></Link>
            </article>
          </div>
        </div>
      </section>

      {/* Join band */}
      <section className="band">
        <div className="wrap">
          <span className="stripes" aria-hidden="true"></span>
          <h2 className="rv">Build what&apos;s next<br />with us.</h2>
          <Link href="/careers" className="btn btn-ink rv d1">Join Us <Icon name="arrow" /></Link>
        </div>
      </section>

      <Carousel />
    </div>
  );
}
