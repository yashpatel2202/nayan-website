'use client';
import styles from './section.module.css';

export default function Specialities() {
  return (
    <section id="specialities" className={styles.section}>
      <h2>Specialities</h2>
      <p>{`Content for Specialities section `.repeat(50)}</p>
    </section>
  );
}
