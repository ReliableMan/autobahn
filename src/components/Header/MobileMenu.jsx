import { gsap } from 'gsap';

import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, navLinks, onNavigate }) {
  return (
    <div 
      className={`${styles.menu} ${isOpen ? styles['menu--open'] : ''}`}
    >

      {navLinks.map((item, index) => (
        <a 
          key={item.id} 
          href={`#${item.id}`}
          onClick={(e) => onNavigate(e, item.id)}
          onMouseEnter={(e) => {
            const textWrapper = e.currentTarget.children[0];
            const line = textWrapper.querySelector(`.${styles.menu__underline}`);
            
            gsap.to(textWrapper, { scale: 1.05, duration: 0.4, ease: 'power3.out' });
            gsap.to(line, { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power3.out' });
          }}
          onMouseLeave={(e) => {
            const textWrapper = e.currentTarget.children[0];
            const line = textWrapper.querySelector(`.${styles.menu__underline}`);
            
            gsap.to(textWrapper, { scale: 1, duration: 0.4, ease: 'power3.out' });
            gsap.to(line, { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power3.inOut' });
          }}
          className={styles.menu__link}
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'ease',
            transitionDelay: `${0.2 + index * 0.1}s`,
          }}
        >
          <span className={styles['menu__link-text']}>
            {item.name}
            <span className={styles.menu__underline}/>
          </span>
        </a>
      ))}

       <div className={`${styles.menu__contact} ${isOpen ? styles['menu__contact--visible'] : ''}`}>
        <span className={styles.menu__address}>
          Waltersdorferstrasse 8-10, Baden
        </span>

        <a href="tel:+43225282000" className={styles.menu__call}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          02252 82000
        </a>
      </div>
    </div>
  );
}