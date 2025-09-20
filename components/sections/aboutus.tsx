'use client';
import styles from './section.module.css';

export default function AboutUs() {
  return (
    <section id="about" className={styles.section}>
      <h2>About Us</h2>
      <p>{`Content for About Us section `.repeat(50)}</p>
    </section>
  );
}
