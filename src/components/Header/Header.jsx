import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import MobileMenu from './MobileMenu';

import styles from './Header.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокировка скролла
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isMenuOpen]);

  // Анимация и умный скролл шапки
  useGSAP(() => {
    gsap.from(headerRef.current, { y: -100, opacity: 0, duration: 1, delay: 1.2, ease: "power3.out" });

    ScrollTrigger.create({
      start: 'top -100', 
      onUpdate: (self) => {
        if (document.body.style.overflow === 'hidden') return;
        if (self.direction === 1) {
          gsap.to(headerRef.current, { y: -100, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: 'power2.out' });
        }
      }
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Данные для ссылок
  const navLinks = [
    { name: 'Dienstleistungen', id: 'services' },
    { name: 'Über das Zentrum', id: 'about' },
    { name: 'Kontakte', id: 'contacts' }
  ];

  // Логика скролла по якорям
  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    if (isMenuOpen) setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, isMenuOpen ? 300 : 0);
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`${styles.header} ${isMenuOpen ? styles['header--menu-open'] : ''}`}
      >
      
        <div className={styles.header__logo}>
          <span className={styles['header__logo-name']}>AUTOHAUS BADEN</span>
          {/* <span className={styles['header__logo-city']}></span> */}
        </div>

        
        <nav className={styles.header__nav}>
          {navLinks.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={(e) => handleScroll(e, item.id)}
              className={styles['header__nav-link']}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Правый блок: Звонок и Бургер */}
        <div className={styles.header__actions}>
          <a 
            href="tel:+43225282000" 
            className={styles.header__call}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>02252 82000</span>
          </a>

          <button 
            onClick={toggleMenu}
            className={styles.header__burger} 
          >
            <span className={`${styles['header__burger-line']} ${styles['header__burger-line--top']} ${
                isMenuOpen ? styles['header__burger-line--open'] : ''
              }`}></span>
            <span className={`${styles['header__burger-line']} ${styles['header__burger-line--bottom']} ${
                isMenuOpen ? styles['header__burger-line--open'] : ''
              }`}></span>
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu} 
        navLinks={navLinks} 
        onNavigate={handleScroll} 
      />
    </>
  );
}