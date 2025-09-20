'use client';
import React, { useRef, useEffect } from 'react';
import styles from './section.module.css';
import substyles from './specialities.module.css';

export default function Specialities() {
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);

  const specialities = [
    {
      title: 'Architecture Planning & Design',
      desc: 'Transforming ideas into functional and aesthetically appealing spaces through thoughtful architecture planning and innovative design solutions.',
      img: '/images/s1-1.webp',
    },
    {
      title: 'Structure Design',
      desc: 'Ensuring safety, stability, and efficiency with precise structural engineering and tailored solutions for every building project.',
      img: '/images/s2-1.webp',
    },
    {
      title: 'Interior Design',
      desc: 'Creating inspiring and functional interiors that reflect your style while optimizing comfort, space, and aesthetics.',
      img: '/images/s3-1.webp',
    },
    {
      title: 'Construction & Consultancy',
      desc: 'Providing expert construction services and professional consultancy to deliver projects on time, within budget, and to the highest standards.',
      img: '/images/s4-1.webp',
    },
  ];

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index >= 0) {
              imgRefs.current[index]?.classList.add(substyles.fadeIn);
              textRefs.current[index]?.classList.add(substyles.fadeIn);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Tilt only the image
  const handleMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const img = imgRefs.current[idx];
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetMove = (idx: number) => {
    const img = imgRefs.current[idx];
    if (img) img.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="specialities" className={styles.section}>
      <h2>Our Specialities</h2>

      {specialities.map((item, index) => (
        <div
          key={index}
          ref={el => {
            if (el) itemRefs.current[index] = el;
          }}
          className={`${substyles.specialityItem} ${index % 2 !== 0 ? substyles.reverse : ''}`}
          onMouseMove={e => handleMove(e, index)}
          onMouseLeave={() => resetMove(index)}
        >
          <div className={substyles.specialityImages}>
            <img
              ref={el => {
                if (el) imgRefs.current[index] = el;
              }}
              src={item.img}
              alt={item.title}
            />
          </div>
          <div
            ref={el => {
              if (el) textRefs.current[index] = el;
            }}
            className={substyles.specialityText}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
