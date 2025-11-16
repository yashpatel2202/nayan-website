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
  '/images/p12.webp',
  '/images/p13.webp',
  '/images/p14.webp',
  '/images/p15.webp',
  '/images/p16.webp',
  '/images/p17.webp',
  '/images/p18.webp',
  '/images/p19.webp',
  '/images/p20.webp',
  '/images/p21.webp',
  '/images/p22.webp',
  '/images/p23.webp',
  '/images/p24.webp',
  '/images/p25.webp',
  '/images/p26.webp',
  '/images/p27.webp',
  '/images/p28.webp',
  '/images/p29.webp',
  '/images/p30.webp',
  '/images/p31.webp',
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
