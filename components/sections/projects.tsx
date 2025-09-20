'use client';
import React, { useState } from 'react';
import styles from './section.module.css';
import substyles from './projects.module.css';

export default function Projects() {
  const projects = [
    '/images/p1.webp',
    '/images/p2.webp',
    '/images/p3.webp',
    '/images/p4.webp',
    '/images/p5.webp',
    '/images/p6.webp',
    '/images/p7.webp',
    '/images/p8.webp',
    '/images/p9.webp',
    '/images/p10.webp',
    '/images/p11.webp',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  const openLightbox = (img: string) => {
    setCurrentImg(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
  };

  return (
    <section id="projects" className={styles.section}>
      <h2 className={substyles.heading}>Projects</h2>

      <div className={substyles.collage}>
        {projects.map((img, index) => (
          <div
            key={index}
            className={`${substyles.collageItem} ${substyles[`item${index + 1}`]}`}
            onClick={() => openLightbox(img)}
          >
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>

      {lightboxOpen && currentImg && (
        <div className={substyles.lightbox} onClick={closeLightbox}>
          <div className={substyles.lightboxContent}>
            <img src={currentImg} alt="Project Preview" />
          </div>
        </div>
      )}
    </section>
  );
}
