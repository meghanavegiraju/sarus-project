import Link from "next/link";
import Icon from "./Icon";
import Year from "./Year";
import { CONTACT, LOGO } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="lane" aria-hidden="true"></div>
      <div className="wrap">
        <div className="f-top">
          <h2>Let&apos;s build<br /><span className="gold">future ready.</span></h2>
          <Link href="/contact" className="btn btn-gold">Contact Us <Icon name="arrow" /></Link>
        </div>
        <div className="f-grid">
          <div>
            <img className="f-logo" src={LOGO} alt="SARUS" />
            <h5>Address</h5>
            <p>{CONTACT.address}</p>
            <a className="social" href={CONTACT.linkedin} target="_blank" rel="noopener">
              <Icon name="in" /> LinkedIn
            </a>
          </div>
          <div>
            <h5>Contact Info</h5>
            <ul>
              <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            </ul>
            <h5 style={{ marginTop: 28 }}>Business Hours</h5>
            <p>{CONTACT.hours}<br />{CONTACT.hoursTime}</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/careers">Join Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5>Projects</h5>
            <ul>
              <li><Link href="/highways">Highways</Link></li>
              <li><Link href="/urban">Urban Infrastructure</Link></li>
            </ul>
            <h5 style={{ marginTop: 28 }}>Location</h5>
            <p>
              <a href={CONTACT.mapsLink} target="_blank" rel="noopener" className="link-arrow">
                Open in Maps <Icon name="arrow" />
              </a>
            </p>
          </div>
        </div>
        <div className="f-bottom">
          <span>Copyright © <Year /> SARUS INFRASTRUCTURES PRIVATE LIMITED.</span>
          <span>Hyderabad · India</span>
        </div>
      </div>
    </footer>
  );
}
