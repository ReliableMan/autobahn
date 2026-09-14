import styles from './ServiceCard.module.css';
import { ArrowRight } from 'lucide-react'; 

export default function ServiceCard({ service, onSelect }) {
  const Icon = service.icon;

  return (
    <div
      className={styles.card}
      onClick={() => onSelect(service)}
    >
      <div className={styles['card__icon-wrap']}>
        <Icon 
          className={styles.card__icon} 
          size={40} 
          strokeWidth={1.5} 
        />
      </div>
      
      <h3 className={styles.card__title}>{service.title}</h3>
      <p className={styles.card__desc}>{service.desc}</p>
      
      <div className={styles.card__more}>
        <span className={styles['card__more-text']}>Mehr lesen</span>
        <ArrowRight size={20} strokeWidth={2} />
      </div>
    </div>
  );
}