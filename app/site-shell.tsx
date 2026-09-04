/* eslint-disable @next/next/no-html-link-for-pages -- Vinext client navigation currently throws an RSC cache-busting error; full-page anchors are reliable here. */
import { Camera, Mail, Menu } from "lucide-react";

type SiteHeaderProps = {
  page?: "home" | "work";
};

export function SiteHeader({ page = "home" }: SiteHeaderProps) {
  const prefix = page === "home" ? "" : "/";

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Landon Ray home">
          <span className="brand-mark">LR</span>
          <span className="brand-name">Landon Ray</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={`${prefix}#about`}>About</a>
          <a href="/work">Selected work</a>
          <a href={`${prefix}#background`}>Background</a>
          <a href="/resume">Résumé</a>
        </nav>
        <a className="header-cta" href="mailto:landon.ray@sbcusd.k12.ca.us">
          <Mail aria-hidden="true" /> Email Landon
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            <a href="/">Home</a>
            <a href={`${prefix}#about`}>About</a>
            <a href="/work">Selected work</a>
            <a href={`${prefix}#background`}>Background</a>
            <a href="/resume">Résumé</a>
            <a href="mailto:landon.ray@sbcusd.k12.ca.us">Email Landon</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">LR</span>
          <span className="brand-name">Landon Ray</span>
        </a>
        <p>Educator · Curriculum builder · Real-world practitioner</p>
      </div>
      <div className="footer-links">
        <a href="/work">Selected work</a>
        <a href="/resume">Résumé</a>
        <a href="https://www.instagram.com/landonjray/" target="_blank" rel="noreferrer">
          <Camera aria-hidden="true" /> Instagram
        </a>
        <a href="mailto:landon.ray@sbcusd.k12.ca.us">Contact</a>
      </div>
    </footer>
  );
}
