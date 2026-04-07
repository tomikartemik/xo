"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  nav: {
    services: string;
    approach: string;
    blog: string;
    contact: string;
  };
};

export function SiteHeader({ locale, nav }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`topNav${isOpen ? " isOpen" : ""}`}>
      <Link href={`/${locale}`} className="logo" onClick={closeMenu}>
        <span className="logoMark">XO</span>
        <span className="logoText">Xouston</span>
      </Link>

      <nav className="desktopNav">
        <a href="#services" className="navLink">{nav.services}</a>
        <a href="#approach" className="navLink">{nav.approach}</a>
        <Link href={`/${locale}/blog`} className="navLink">{nav.blog}</Link>
        <a href="#contact" className="navLink navCta">{nav.contact}</a>
      </nav>

      <div className="headerActions">
        <div className="desktopLang">
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <button
          type="button"
          className="menuToggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="mobileMenu" aria-hidden={!isOpen}>
        <div className="mobileMenuLang">
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <div className="mobileMenuLinks">
          <a href="#services" className="navLink" onClick={closeMenu}>{nav.services}</a>
          <a href="#approach" className="navLink" onClick={closeMenu}>{nav.approach}</a>
          <Link href={`/${locale}/blog`} className="navLink" onClick={closeMenu}>{nav.blog}</Link>
          <a href="#contact" className="navLink navCta" onClick={closeMenu}>{nav.contact}</a>
        </div>
      </div>
    </header>
  );
}
