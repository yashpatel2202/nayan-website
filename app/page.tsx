'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import Lottie from 'lottie-react';
import scrollAnimation from './images/scroll.json';
import Specialities from '@/components/sections/specialities';
import Projects from '@/components/sections/projects';
import ContactUs from '@/components/sections/contactus';


export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentEl = document.querySelector(`.${styles.content}`);
    if (!contentEl) return;

    const handleScroll = () => {
      if (contentLogoRef.current) {
        const logoBottom = contentLogoRef.current.getBoundingClientRect().bottom;
        setShowHeader(logoBottom <= 70);
      }
    };

    contentEl.addEventListener('scroll', handleScroll);
    return () => contentEl.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`${styles.header} ${showHeader ? styles.headerVisible : ''}`}>
        {/* Top row: logo + desktop nav + hamburger */}
        <div className={styles.headerTop}>
          <div
            className={styles.logo}
            onClick={() => window.location.reload()}
            style={{ cursor: 'pointer' }}
          >
            <img src="/images/logo.webp" alt="Logo" className={styles.logoImage} />
          </div>

          {/* Desktop menu */}
          <nav className={styles.nav}>
            <a href="#hero">Home</a>
            <a href="#specialities">Specialities</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Us</a>
          </nav>

          {/* Mobile Hamburger */}
          <div
            className={`${styles.mobileHamburger} ${mobileMenuOpen ? styles.open : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile menu (links under top row) */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#specialities" onClick={() => setMobileMenuOpen(false)}>Specialities</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </header>


      {/* Background */}
      <div className={styles.background} />

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.heroContainer} id="hero">
          <img src="/images/building.webp" alt="Secondary Image" className={styles.secondaryImage} />
          <div ref={contentLogoRef} className={styles.contentLogo}>
            <img src="/images/logo-content.webp" alt="Content Logo" />
          </div>

          {/* New text directly below logo-content */}
          <div className={styles.tagline}>
            Structure Design Engineers and Consultants
          </div>

          {/* Lottie scroll indicator */}
          <div className={styles.scrollIndicator}>
            <Lottie animationData={scrollAnimation} loop />
          </div>
        </div>

        {/* Extended image between building section and text */}
        <img
          src="/images/extended.webp"
          alt="Extended Decoration"
          className={styles.extendedImage}
        />

        {/* Sections */}
        <Specialities />
        <Projects />
        <ContactUs />
      </main>

      <img
        src="/images/tree.webp"
        alt="Bottom decoration"
        className={`${styles.bottomImage} ${showHeader ? styles.footerHalf : ''}`}
      />
    </>
  );
}
