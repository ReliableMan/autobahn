// ServiceCard.jsx
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, onSelect }) {
  return (
    <div
      className={styles.card}
      onClick={() => onSelect(service)}
    >
      <div className={styles['card__icon-wrap']}>
        <svg
          className={styles.card__icon}
          width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        >
          {service.icon}
        </svg>
      </div>
      <h3 className={styles.card__title}>{service.title}</h3>
      <p className={styles.card__desc}>{service.desc}</p>
      <div className={styles.card__more}>
        <span className={styles['card__more-text']}>Mehr lesen</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  );
}