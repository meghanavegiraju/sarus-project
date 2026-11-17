"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { CONTACT, LOGO } from "@/lib/site";

const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export default function Header() {
  const pathname = norm(usePathname() || "/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;
  const projectsActive = pathname === "/highways" || pathname === "/urban";

  // Solid header after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setDdOpen(false);
  }, [pathname]);

  // Mobile menu: body class + scroll lock
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close dropdown on outside click; Escape closes the mobile menu
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.querySelector(".lightbox.open")) setMenuOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const navLink = (href: string, label: string, extra = "") => (
    <Link href={href} className={[extra, isActive(href) ? "active" : ""].filter(Boolean).join(" ") || undefined}>
      {label}
    </Link>
  );

  return (
    <>
      <header className={`header${scrolled || menuOpen ? " solid" : ""}`} id="header">
        <div className="wrap bar">
          <Link href="/" className="logo" aria-label="SARUS home">
            <img src={LOGO} alt="SARUS" />
          </Link>
          <nav className="nav" aria-label="Primary">
            {navLink("/", "Home")}
            {navLink("/about", "About Us")}
            <div
              ref={ddRef}
              className={`dd${projectsActive ? " active" : ""}${ddOpen ? " open" : ""}`}
            >
              <button aria-haspopup="true" aria-expanded={ddOpen} onClick={() => setDdOpen((o) => !o)}>
                Projects <Icon name="chev" />
              </button>
              <div className="dd-menu" role="menu">
                <Link href="/highways" role="menuitem" className={isActive("/highways") ? "active" : undefined}>
                  <span className="ic"><Icon name="road" /></span>
                  <span><b>Highways</b><small>Greenfield &amp; brownfield road works</small></span>
                </Link>
                <Link href="/urban" role="menuitem" className={isActive("/urban") ? "active" : undefined}>
                  <span className="ic"><Icon name="city" /></span>
                  <span><b>Urban Infrastructure</b><small>River front &amp; city development</small></span>
                </Link>
              </div>
            </div>
            {navLink("/gallery", "Gallery")}
            {navLink("/contact", "Contact Us")}
            {navLink("/careers", "Join Us", "cta")}
          </nav>
          <button
            className="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="drawer"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
          </button>
        </div>
      </header>

      <div className="drawer" id="drawer" aria-label="Mobile menu">
        {navLink("/", "Home")}
        {navLink("/about", "About Us")}
        <button className="sub-toggle" aria-expanded={subOpen} onClick={() => setSubOpen((o) => !o)}>
          Projects <Icon name="chev" />
        </button>
        <div className={`sub${subOpen ? " open" : ""}`}>
          <div>
            {navLink("/highways", "Highways")}
            {navLink("/urban", "Urban Infrastructure")}
          </div>
        </div>
        {navLink("/gallery", "Gallery")}
        {navLink("/careers", "Join Us")}
        {navLink("/contact", "Contact Us")}
        <div className="d-contact">
          <span>{CONTACT.phone}</span>
          <span>{CONTACT.email}</span>
          <span>Mon – Sat · {CONTACT.hoursTime}</span>
        </div>
      </div>
    </>
  );
}
