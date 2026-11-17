"use client";

import { useRef, useState, type FormEvent } from "react";
import Icon from "./Icon";
import { CONTACT } from "@/lib/site";
import { MAX_FILE, emailOk, openMail } from "@/lib/validate";

type Errors = { name?: boolean; email?: boolean; file?: boolean };

export default function CareerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [over, setOver] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onFile = (f: File | null) => {
    setFile(f);
    if (f) setErrors((e) => ({ ...e, file: f.size > MAX_FILE }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim(), m = email.trim();
    const next: Errors = { name: n.length <= 1, email: !emailOk(m), file: !file || file.size > MAX_FILE };
    setErrors(next);
    if (next.name || next.email || next.file) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>(".invalid input")?.focus());
      return;
    }
    openMail(CONTACT.email, `Job application — ${n}`, `Name: ${n}\nEmail: ${m}\nResume: ${file!.name} (please find attached)\n`);
    setDone(true);
  };

  const reset = () => {
    formRef.current?.reset();
    setName(""); setEmail(""); setFile(null); setErrors({}); setDone(false);
  };

  const tooBig = !!file && file.size > MAX_FILE;

  return (
    <form ref={formRef} className={`form rv d1${done ? " done" : ""}`} noValidate onSubmit={submit}>
      <div className={`field${errors.name ? " invalid" : ""}`}>
        <label htmlFor="c-name">Name <span className="req">Required</span></label>
        <input id="c-name" name="name" type="text" placeholder="Full Name" autoComplete="name" required
          value={name} onChange={(e) => { setName(e.target.value); setErrors((x) => ({ ...x, name: false })); }} />
        <span className="err">Please enter your full name.</span>
      </div>
      <div className={`field${errors.email ? " invalid" : ""}`}>
        <label htmlFor="c-email">Email <span className="req">Required</span></label>
        <input id="c-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required
          value={email} onChange={(e) => { setEmail(e.target.value); setErrors((x) => ({ ...x, email: false })); }} />
        <span className="err">Please enter a valid email address.</span>
      </div>
      <div className={`field${errors.file ? " invalid" : ""}`}>
        <label htmlFor="c-file">Upload Resume <span className="req">Required</span></label>
        <div
          className={`drop${over ? " over" : ""}${file ? " has" : ""}`}
          onDragEnter={() => setOver(true)}
          onDragOver={() => setOver(true)}
          onDragLeave={() => setOver(false)}
          onDrop={() => setOver(false)}
        >
          <input id="c-file" name="resume" type="file" accept=".pdf,.doc,.docx" required
            onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
          <span className="ico"><Icon name="upload" /></span>
          <b>Drop your CV here, or click to browse</b>
          <small>PDF, DOC, DOCX · Max. file size: 10 MB</small>
          <span className="file">{file ? `${file.name} · ${(file.size / 1048576).toFixed(1)} MB` : ""}</span>
        </div>
        <span className="err">
          {tooBig ? "That file is over 10 MB — please upload a smaller file." : "Please attach your resume (max 10 MB)."}
        </span>
      </div>
      <button className="btn btn-gold" type="submit">Submit application <Icon name="arrow" /></button>
      <p className="note">
        This page has no server. Submitting opens your email app addressed to {CONTACT.email} — attach your CV there before sending.
      </p>
      <div className="success" role="status">
        <span className="tick"><Icon name="check" /></span>
        <h3>Thank you!</h3>
        <p style={{ color: "var(--muted)" }}>Your email app should now be open. Attach your CV and hit send — we&apos;ll be in touch.</p>
        <button type="button" className="link-arrow" onClick={reset}>Submit another <Icon name="arrow" /></button>
      </div>
    </form>
  );
}
