'use client';
import styles from './section.module.css';

export default function ContactUs() {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Us</h2>
      <p>{`Content for Contact Us section `.repeat(50)}</p>
    </section>
  );
}
