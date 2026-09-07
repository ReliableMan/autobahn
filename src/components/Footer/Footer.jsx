import { useRef, useState, 
  useEffect 
} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  'Kfz-Service (Hauptuntersuchung)',
  'Reifen und Felgen',
  'Wohnmobilreparatur und -vermietung',
  'Karosseriereparatur und Lackierung',
  'Autokauf'
];

const StyledInput = ({ type, placeholder, name, required }) => (
  <div className={styles.footer__field}>
    <input
      type={type}
      name={name}
      required={required}
      className={styles.footer__input}
      placeholder={placeholder}
    />
  </div>
);

export default function Footer() {
  const footerRef = useRef(null);
  
  const [selectedServices, setSelectedServices] = useState([]);

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
    // setTimeout(() => {
    //   ScrollTrigger.refresh();
    // }, 500);

  }, { scope: footerRef });

  // useEffect(() => {
  //   const observer = new ResizeObserver(() => {
  //     ScrollTrigger.refresh();
  //   });
    
  //   observer.observe(document.body);
    
  //   return () => observer.disconnect();
  // }, []);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

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

          <form onSubmit={(e) => e.preventDefault()} className={styles.footer__form}>
            
            <div className={styles['footer__form-grid']}>
              <StyledInput type="text" name="firstName" placeholder="Name *" required />
              <StyledInput type="text" name="lastName" placeholder="Nachname *" required />
              
              <StyledInput type="email" name="email" placeholder="E-Mail *" required />
              <StyledInput type="tel" name="phone" placeholder="Telefonnummer *" required />
              
              <StyledInput type="text" name="carMake" placeholder="Automarke (z.B. Jeep)" />
              <StyledInput type="text" name="carModel" placeholder="Automodell" />
            </div>

            <div>
              <p className={styles['footer__services-label']}>Wählen Sie die Dienste aus, an denen Sie interessiert sind:</p>
              <div className={styles['footer__services-list']}>
                {serviceOptions.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`${styles.footer__tag} ${isSelected ? styles['footer__tag--active'] : ''}`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.footer__field}>
              <textarea 
                name="message"
                rows="3"
                className={styles.footer__textarea}
                placeholder="Ihre Nachricht *"
                required
              />
            </div>

            <button type="submit" className={styles.footer__submit}>
              Nachricht senden
            </button>
          </form>
        </div>

        <div id="contacts" className={`footer-anim ${styles.footer__info}`}>
          
          <div className={styles['footer__info-grid']}>
            <div>
              <div className={styles['footer__info-label']}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ADRESSE
              </div>
              <p className={styles['footer__info-text']}>
                Waltersdorfer Strasse 8-10,<br/>2500 Baden,<br/>Austria
              </p>
            </div>

            <div>
              <div className={styles['footer__info-label']}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ÖFFNUNGSZEITEN
              </div>
              <p className={styles['footer__info-text']}>
                Mo - Do: 07:30 - 18:00<br/>Fr: 07:00 - 17:00<br/>Sa - So: Geschlossen
              </p>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps?q=Waltersdorfer+Strasse+8-10,+2500+Baden,+Austria" 
            target="_blank" 
            rel="noreferrer"
            className={styles.footer__map}
          >
            <div className={styles['footer__map-pattern']} />
            <div className={styles['footer__map-overlay']}>
              <div className={styles['footer__map-icon']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span className={styles['footer__map-label']}>AUF KARTE ÖFFNEN</span>
            </div>
          </a>
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