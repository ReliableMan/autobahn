import { useState } from 'react';
import styles from './Footer.module.css';

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

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const serviceMap = {
      'Kfz-Service (Hauptuntersuchung)': 'werkstatt',
      'Reifen und Felgen': 'reifen-rader',
      'Wohnmobilreparatur und -vermietung': 'wohnmobil',
      'Karosseriereparatur und Lackierung': 'spenglerei',
      'Autokauf': 'autokauf'
    };

    const firstSelectedService = selectedServices[0];
    const serviceTypeKey = firstSelectedService ? serviceMap[firstSelectedService] : 'werkstatt';

    const payload = {
      name: formData.get('firstName'),
      surname: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      carBrand: formData.get('carMake'),
      carModel: formData.get('carModel'),
      message: formData.get('message'),
      serviceType: serviceTypeKey
    };

    try {
      // Используйте полный URL (http://localhost:3000/api/contact) 
      // ИЛИ оставьте '/api/contact', если настроили proxy в vite.config.js
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type");
      
      if (response.ok) {
        alert('Nachricht erfolgreich gesendet!');
        e.target.reset();
        setSelectedServices([]);
      } else {
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await response.json();
          alert(`Fehler: ${errorData.message}`);
        } else {
          const errorText = await response.text();
          console.error('Server HTML/Text error:', errorText);
          alert(`Serverfehler (${response.status}). Bitte versuchen Sie es später erneut.`);
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Ein Netzwerkfehler ist aufgetreten. Bitte überprüfen Sie Ihre Verbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.footer__form}>
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

      <button type="submit" className={styles.footer__submit} disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}