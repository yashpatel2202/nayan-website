'use client';
import styles from './section.module.css';
import substyles from './contact.module.css';

export default function ContactUs() {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Us</h2>

      <div className={substyles.contactContainer}>
        {/* Background Image */}
        <div className={substyles.contactImage}>
          <img src="/images/contact-image.webp" alt="Contact" />
        </div>

        {/* Info Overlay */}
        <div className={substyles.contactInfo}>
          <h3>Nayan Prajapati</h3>
          <p className={substyles.title}>BE Civil Engineer</p>
          <p className={substyles.title}>ME Structure Engineer</p>

          {/* Phone */}
          <p className={substyles.phone}>
            <span className={substyles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 1 .58-.19c.35.05.674.18.94.36l1.5.9a.678.678 0 0 1 .28.88l-1 2.1a11.072 11.072 0 0 0 5.516 5.516l2.1-1a.678.678 0 0 1 .88.28l.9 1.5a.678.678 0 0 1-.19.95c-.4.34-.922.59-1.5.73-1.44.34-4.123-.75-7.17-3.797C1.784 5.48.693 2.797 1.032 1.357c.14-.578.39-1.1.73-1.5z"/>
              </svg>
            </span>
            <a href="tel:7567728147">7567728147</a>
          </p>

          {/* Address */}
          <p className={substyles.address}>
            <span className={substyles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a5 5 0 0 0-5 5c0 3.25 5 11 5 11s5-7.75 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
              </svg>
            </span>
            <a href="https://www.google.com/maps/search/?api=1&query=G+148,+First+floor,+palladium+plaza,+VIP+road,+vesu,+surat+-+395007" target="_blank" rel="noopener noreferrer">
              G 148, First floor, Palladium Plaza, VIP Road, Vesu, Surat - 395007
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
