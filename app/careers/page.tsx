import type { Metadata } from "next";
import CareerForm from "@/components/CareerForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Careers" };

const PERKS = [
  { b: "Complex, meaningful work", s: "National highway and urban river projects across four states." },
  { b: "Modern technology", s: "Micro-surfacing, bitumen overlays and the latest road-maintenance methods." },
  { b: "A team that adapts", s: "Built through a lockdown — we move fast and deliver together." },
];

export default function CareersPage() {
  return (
    <div className="page">
      <PageHeader
        crumbs={["Join Us"]}
        title="Careers"
        text="Engineers, planners and site leaders who want to build India's next roads — we'd like to meet you."
      />
      <section className="sec">
        <div className="wrap form-wrap">
          <div>
            <span className="eyebrow rv">Join Us</span>
            <h2 className="rv d1" style={{ marginTop: 18 }}>We would love to connect with you.</h2>
            <p className="lead rv d2" style={{ marginTop: 22 }}>Please drop your details and CV, and our team will get in touch.</p>
            <div className="perks">
              {PERKS.map((p, i) => (
                <div key={p.b} className={`perk rv${i ? ` d${i}` : ""}`}>
                  <i>{String(i + 1).padStart(2, "0")}</i>
                  <div><b>{p.b}</b><span>{p.s}</span></div>
                </div>
              ))}
            </div>
          </div>
          <CareerForm />
        </div>
      </section>
    </div>
  );
}
