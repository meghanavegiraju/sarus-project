import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="page">
      <PageHeader
        crumbs={["Contact Us"]}
        title="Contact Us"
        text="Talk to us about a project, a partnership, or anything else."
      />
      <section className="sec">
        <div className="wrap">
          <div className="form-wrap">
            <div className="contact-cards">
              <span className="eyebrow rv" style={{ marginBottom: 10 }}>Get in touch</span>
              <a className="ccard rv" href={`mailto:${CONTACT.email}`}>
                <span className="ic"><Icon name="mail" /></span>
                <span><small>Email us</small><b>{CONTACT.email}</b></span>
              </a>
              <a className="ccard rv d1" href={CONTACT.phoneHref}>
                <span className="ic"><Icon name="phone" /></span>
                <span><small>Call us</small><b>{CONTACT.phone}</b></span>
              </a>
              <a className="ccard rv d2" href={CONTACT.mapsLink} target="_blank" rel="noopener">
                <span className="ic"><Icon name="pin" /></span>
                <span><small>Meet us</small><b>{CONTACT.address}</b></span>
              </a>
              <div className="ccard rv d3">
                <span className="ic"><Icon name="clock" /></span>
                <span><small>Business hours</small><b>{CONTACT.hours}<br />{CONTACT.hoursTime}</b></span>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="map rv">
            <iframe title="SARUS office location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={CONTACT.mapsEmbed}></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
