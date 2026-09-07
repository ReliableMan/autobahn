import styles from './Imprint.module.css';

export default function Imprint() {
  return (
    <div className={styles.imprint}>
      <h1 className={styles.imprint__title}>Impressum</h1>

      {/* Angaben gemäß § 5 TMG */}
      <div className={styles.imprint__section}>
        <h2 className={styles['imprint__section-title']}>Angaben gemäß § 5 TMG</h2>
        <p className={styles.imprint__company}>CS Autohaus Baden GmbH</p>
        <p className={styles.imprint__address}>
          Waltersdorfer Strasse 8-10<br />
          2500 Baden<br />
          Österreich
        </p>
      </div>

      {/* Vertreten durch */}
      <div className={styles.imprint__section}>
        <h2 className={styles['imprint__section-title']}>Vertreten durch</h2>
        <p className={styles.imprint__rep}>Christian Suschil</p>
      </div>

      {/* Kontakt */}
      <div className={styles.imprint__section}>
        <h2 className={styles['imprint__section-title']}>Kontakt</h2>
        <div className={styles['imprint__contact-list']}>
          <p className={styles['imprint__contact-item']}>
            <span className={styles['imprint__contact-label']}>Telefon:</span>
            <a href="tel:+43225282000" className={styles.imprint__link}>0225282000</a>
          </p>
          <p className={styles['imprint__contact-item']}>
            <span className={styles['imprint__contact-label']}>E-Mail:</span>
            <a href="mailto:office@autohaus-baden.at" className={styles.imprint__link}>office@autohaus-baden.at</a>
          </p>
          <p className={styles['imprint__contact-item']}>
            <span className={styles['imprint__contact-label']}>Website:</span>
            <a href="https://www.yourwebsite.com" target="_blank" rel="noreferrer" className={styles.imprint__link}>
              www.yourwebsite.com
            </a>
          </p>
        </div>
      </div>

      {/* Umsatzsteuer-Identifikationsnummer */}
      <div className={styles.imprint__section}>
        <h2 className={styles['imprint__section-title']}>Umsatzsteuer-Identifikationsnummer</h2>
        <p className={styles.imprint__vat}>UID-Nr.: ATU75096147</p>
      </div>

      {/* Haftung für Inhalte */}
      <div className={styles.imprint__section}>
        <h2 className={styles['imprint__section-title']}>Haftung für Inhalte</h2>
        <p className={styles.imprint__text}>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
          diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
          wir diese Inhalte umgehend entfernen.
        </p>
      </div>

      {/* Назад */}
      <div className={styles['imprint__back-wrap']}>
        <a href="/" className={styles.imprint__link}>← Zur Startseite</a>
      </div>
    </div>
  );
}