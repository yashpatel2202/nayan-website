'use client';
import styles from './section.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <p>{`Content for Projects section `.repeat(50)}</p>
    </section>
  );
}
