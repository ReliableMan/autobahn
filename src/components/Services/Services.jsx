// Services.jsx
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ServiceModal from '../Modals/ServiceModal';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';

import styles from './Services.module.css';
import cardStyles from './ServiceCard.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [activeService]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo(`.${styles.services__title}, .${styles.services__subtitle}`,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2 }
    );

    tl.fromTo(`.${cardStyles.card}`,
      { y: 100, opacity: 0, scale: 0.85 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)', stagger: 0.15 },
      "-=0.6"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.services}>
      <div id="services" className={styles.services__header}>
        <h2 className={styles.services__title}>Unsere Dienstleistungen</h2>
        <p className={styles.services__subtitle}>
          Umfassender Service für Ihr Fahrzeug von zertifizierten Spezialisten mit 30 Jahren Erfahrung.
        </p>
      </div>

      <div className={styles.services__grid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={setActiveService}
          />
        ))}
      </div>

      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  );
}