"use client";

import { useRef, useState, type FormEvent } from "react";
import Icon from "./Icon";
import { CONTACT } from "@/lib/site";
import { emailOk, openMail, phoneOk } from "@/lib/validate";

type Errors = { name?: boolean; email?: boolean; phone?: boolean };
const EMPTY = { name: "", email: "", phone: "", msg: "" };

export default function ContactForm() {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) => {
    setV((s) => ({ ...s, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: false }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const name = v.name.trim(), email = v.email.trim(), phone = v.phone.trim(), msg = v.msg.trim();
    const next: Errors = { name: name.length <= 1, email: !emailOk(email), phone: !phoneOk(phone) };
    setErrors(next);
    if (next.name || next.email || next.phone) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>(".invalid input")?.focus());
      return;
    }
    openMail(CONTACT.email, `Website enquiry — ${name}`, `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${msg}`);
    setDone(true);
  };

  const reset = () => { setV(EMPTY); setErrors({}); setDone(false); };

  return (
    <form ref={formRef} className={`form rv d1${done ? " done" : ""}`} noValidate onSubmit={submit}>
      <h3>Send us a message</h3>
      <div className={`field${errors.name ? " invalid" : ""}`}>
        <label htmlFor="f-name">Full Name <span className="req">Required</span></label>
        <input id="f-name" name="name" type="text" placeholder="Full Name" autoComplete="name" required value={v.name} onChange={set("name")} />
        <span className="err">Please enter your full name.</span>
      </div>
      <div className="row2">
        <div className={`field${errors.email ? " invalid" : ""}`}>
          <label htmlFor="f-email">Email <span className="req">Required</span></label>
          <input id="f-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required value={v.email} onChange={set("email")} />
          <span className="err">Please enter a valid email.</span>
        </div>
        <div className={`field${errors.phone ? " invalid" : ""}`}>
          <label htmlFor="f-phone">Phone <span className="req">Required</span></label>
          <input id="f-phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" required value={v.phone} onChange={set("phone")} />
          <span className="err">Please enter a valid phone number.</span>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Message</label>
        <textarea id="f-msg" name="message" placeholder="Tell us about your project or enquiry" value={v.msg} onChange={set("msg")} />
      </div>
      <button className="btn btn-gold" type="submit">Send message <Icon name="arrow" /></button>
      <p className="note">No data is sent to a server — this opens your email app with the message ready to send.</p>
      <div className="success" role="status">
        <span className="tick"><Icon name="check" /></span>
        <h3>Message ready</h3>
        <p style={{ color: "var(--muted)" }}>Your email app should now be open with the message filled in. Hit send and we&apos;ll get back to you.</p>
        <button type="button" className="link-arrow" onClick={reset}>Write another <Icon name="arrow" /></button>
      </div>
    </form>
  );
}
