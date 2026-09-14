import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import styles from './Footer.module.css';

import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.footer-anim', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.footer__container}>
        
        <div className="footer-anim">
          <h2 className={styles.footer__title}>
            Kontaktieren Sie uns
          </h2>
          <p className={styles.footer__subtitle}>
            Füllen Sie das untenstehende Formular aus, und unser Spezialist wird sich mit Ihnen in Verbindung setzen, um die Details zu klären.
          </p>

          <ContactForm />
          
        </div>

        <div id="contacts" className={`footer-anim ${styles.footer__info}`}>
        </div>
      </div>

      <div className={`footer-anim ${styles.footer__bottom}`}>
        <div className={styles.footer__brand}>
          <span className={styles.footer__logo}>AUTOHAUS BADEN</span>
          <span className={styles.footer__copyright}>© 2026. Alle Rechte vorbehalten.</span>
        </div>
        <div className={styles.footer__links}>
          <Link to="/imprint" className={styles.footer__link}>Impressum</Link>
        </div>
      </div>
    </footer>
  );
}