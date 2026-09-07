import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import styles from './HeroScroller.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroller() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const progressTextRef = useRef(null);
  const progressBarRef = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const frameCount = 192;
  const currentFrame = useRef({ frame: 1 });
  const images = useRef([]);

  useGSAP(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const renderFrame = (rawIndex) => {
      const index = Math.round(rawIndex); 
      const img = images.current[index - 1];
      
      if (img && img.complete && img.naturalHeight !== 0) {
        const screenWidth = canvas.width;
        const screenHeight = canvas.height;

        const imageRatio = img.width / img.height;
        const screenRatio = screenWidth / screenHeight;

        let drawWidth, drawHeight, offsetX, offsetY;
        let focusPointX = 0.5; 
        let focusPointY = 0.5;
        let zoom = 1;

        if (screenWidth >= 1024) {
          focusPointX = 0.7;  
          focusPointY = 1.0;  
          zoom = 1.2;           
        } else if (screenWidth >= 768) {
          focusPointX = 0.5;  
          focusPointY = 0.3;  
          zoom = 1.2;         
        } else if (screenWidth >= 480) {
          focusPointX = 0.3;  
          focusPointY = 0.4;  
          zoom = 1.2;         
        } else {
          focusPointX = 0.65; 
          focusPointY = 0.3;  
          zoom = 1.3;         
        }

        if (screenRatio > imageRatio) {
          drawWidth = screenWidth;
          drawHeight = screenWidth / imageRatio;
        } else {
          drawWidth = screenHeight * imageRatio;
          drawHeight = screenHeight;
        }

        drawWidth *= zoom;
        drawHeight *= zoom;
        offsetX = (screenWidth - drawWidth) * focusPointX; 
        offsetY = (screenHeight - drawHeight) * focusPointY;

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrame.current.frame);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const loadImages = () => {
      images.current = []; 
      let loadedCount = 0;
      const progressObj = { val: 0 }; 
      const startTime = Date.now();
      const minLoaderDuration = 2500; 

      const onFrameLoad = () => {
        loadedCount++;
        const targetProgress = (loadedCount / frameCount) * 100;

        if (loadedCount === frameCount) {
          const elapsed = Date.now() - startTime;
          const remainingTime = Math.max(0, minLoaderDuration - elapsed) / 1000; 

          gsap.to(progressObj, {
            val: 100,
            duration: Math.max(0.5, remainingTime), 
            ease: "power2.out",
            overwrite: true,
            onUpdate: () => {
              const currentVal = Math.round(progressObj.val);
              if (progressTextRef.current) progressTextRef.current.innerText = `${currentVal}%`;
              if (progressBarRef.current) progressBarRef.current.style.width = `${currentVal}%`;
            },
            onComplete: () => {
              setImagesLoaded(true); 
              renderFrame(1);
              ScrollTrigger.refresh();
            }
          });
        } else {
          gsap.to(progressObj, {
            val: targetProgress,
            duration: 0.3,
            ease: "none",
            overwrite: "auto",
            onUpdate: () => {
              const currentVal = Math.round(progressObj.val);
              if (progressTextRef.current) progressTextRef.current.innerText = `${currentVal}%`;
              if (progressBarRef.current) progressBarRef.current.style.width = `${currentVal}%`;
            }
          });
        }
      };

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/frames/frame-${frameNumber}.jpg`;
        img.onload = onFrameLoad;
        img.onerror = onFrameLoad; 
        images.current.push(img);
      }
    };

    loadImages();

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1025px)",
      isTablet: "(min-width: 768px) and (max-width: 1024px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isTablet, isMobile } = context.conditions;
      
      const startY = isMobile ? -30 : -50;
      const scrollDistance = isMobile ? '+=150%' : (isTablet ? '+=200%' : '+=500%');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          end: scrollDistance,
          scrub: 0.5,
        },
      });

      tl.to(currentFrame.current, {
        frame: frameCount,
        snap: 'frame',
        ease: 'none',
        onUpdate: () => renderFrame(currentFrame.current.frame),
      }, 0);

      tl.to(`.${styles.hero__intro}`, { opacity: 0, y: startY, duration: 0.2 }, 0.1);

      tl.to(`.${styles['hero__service--left']}`, { opacity: 1, y: 0, duration: 0.1 }, 0.3)
        .to(`.${styles['hero__service--left']}`, { opacity: 0, y: startY, duration: 0.1 }, 0.5)
        .to(`.${styles['hero__service--right']}`, { opacity: 1, y: 0, duration: 0.1 }, 0.7);
    });

    return () => {
      mm.revert();
      window.removeEventListener('resize', setCanvasSize);
    };

  }, { scope: containerRef, dependencies: [] });

  return (
      <div ref={containerRef} className={styles.hero}>
        <div className={`${styles.hero__loader} ${imagesLoaded ? styles['hero__loader--hidden'] : ''}`}>
          <div className={styles['hero__loader-title']}>Showroom-Initialisierung</div>
          <div className={styles.hero__progress}>
            <div ref={progressBarRef} className={styles['hero__progress-bar']} />
          </div>
          <div ref={progressTextRef} className={styles['hero__progress-text']}>0%</div>
        </div>

        <canvas
          ref={canvasRef}
          className={`${styles.hero__canvas} ${imagesLoaded ? styles['hero__canvas--visible'] : ''}`}
        />

        <div className={styles.hero__content}>
          <div className={styles.hero__intro}>
            <h1 className={styles['hero__intro-title']}>Autohaus Baden</h1>
            <p className={styles['hero__intro-subtitle']}>Ihre Werkstatt für alle Marken</p>
          </div>

          <div className={`${styles.hero__service} ${styles['hero__service--left']}`}>
            <div className={styles['hero__service-inner']}>
              <h2 className={styles['hero__service-title']}>Karosseriereparatur</h2>
              <p className={styles['hero__service-text']}>Wiederherstellung des Werksstandards</p>
            </div>
          </div>

          <div className={`${styles.hero__service} ${styles['hero__service--right']}`}>
            <div className={styles['hero__service-inner']}>
              <h2 className={styles['hero__service-title']}>Partner Euromaster</h2>
              <p className={styles['hero__service-text']}>Deutsche Präzision bis ins kleinste Detail</p>
            </div>
          </div>
        </div>
      </div>
  );
}