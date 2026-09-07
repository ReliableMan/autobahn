export const servicesData = [
  {
    id: 1,
    title: 'Werkstatt',
    desc: 'Umfassendes Angebot an technischer Wartung und Diagnose für Fahrzeuge aller Marken.',
    fullDesc: 'Unsere Mechaniker führen fachmännische Reparaturen und Inspektionen an allen Fahrzeugmodellen durch. Von der §57a-Überprüfung über den Ölwechsel bis zur komplexen Motorreparatur – wir sorgen dafür, dass Ihr Auto in Top-Zustand bleibt. Wir verwenden modernste Diagnosetechnik und hochwertige Ersatzteile. Darüber hinaus haben wir über 30 Jahre Erfahrung in der Reparatur von Fahrzeugen der Marken Jeep, Chrysler und Dodge.',
    gallery: [
      '/images/services/werkstatt.webp',
      '/images/services/werkstatt2.webp',
      '/images/services/werkstatt3.webp',
      '/images/services/werkstatt4.webp',
      '/images/services/werkstatt5.webp',
      '/images/services/werkstatt6.webp',
    ],
    icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.41-1.41l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77z" />
  },
  {
    id: 2,
    title: 'Räderdepot',
    desc: 'Professionelle Reifenmontage, Auswuchten und saisonale Reifenlagerung in unserem Lager.',
    fullDesc: 'Als Euromaster-Partner bieten wir Ihnen ein umfassendes Räderservice. Dazu gehören professioneller Räderwechsel, Rädereinlagerung und Reparatur von Felgen. Wir beraten Sie individuell bei der Auswahl der richtigen Sommer-, Winter- oder Ganzjahresreifen für Ihr Fahrzeug.',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
      '/images/services/Felge1.webp',
    ],
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="8" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="16" />
        <line x1="22" y1="12" x2="16" y2="12" />
        <line x1="8" y1="12" x2="2" y2="12" />
      </>
    )
  },
  {
    id: 3,
    title: 'Spenglerei und Lackiererei',
    desc: 'Dellenentfernung, Wiederherstellung der Karosseriegeometrie und hochwertige Lackierung.',
    fullDesc: 'Ob kleine Dellen, Kratzer oder größere Unfallschäden – in unserer Spenglerei und Lackiererei bringen wir Ihr Fahrzeug wieder in Form. Wir arbeiten sorgfältig, setzen auf bewährte Reparaturmethoden und hochwertige Lacke, damit Ihr Fahrzeug wieder zuverlässig und perfekt aussieht.',
    gallery: [
      '/images/services/lack5.webp',
    ],
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    )
  },
  {
    id: 4,
    title: 'Wohnmobilreparatur und Vermietung',
    desc: 'Spezialisierter Service für Camper. Saisonvorbereitung und Vermietung.',
    fullDesc: 'Reparatur und Vermietung von Wohnmobilen aus einer Hand. Von Fahrwerk, Bremsen und Räder über technische Inspektionen bis hin zu Karosseriereparaturen – wir machen Ihr Fahrzeug urlaubsbereit. Kein eigenes Wohnmobil? Mieten Sie bei uns und starten Sie durch.',
    gallery: [
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
      '/images/services/caravan1.webp',
      '/images/services/caravan3.webp',
    ],
    icon: (
      <>
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M3 12h18M8 21v-4M16 21v-4M6 7V3h12v4" />
      </>
    )
  },
  {
    id: 5,
    title: 'Autokauf',
    desc: 'Zuverlässige Gebrauchtwagen. Gründliche Inspektion vor dem Verkauf und Garantie.',
    fullDesc: 'Egal, ob Sie ein neues oder gebrauchtes Fahrzeug suchen, wir beraten Sie kompetent und transparent. Unser Team hilft Ihnen, das passende Auto für Ihre Bedürfnisse zu finden.',
    gallery: [
      '/images/services/jeep2.webp',
    ],
    icon: (
      <>
        <path d="M14 9V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
        <path d="M22 13h-8M18 9l4 4-4 4" />
      </>
    )
  },
  {
    id: 6,
    title: 'Euromaster-Partner',
    desc: 'Garantie höchster Qualitätsstandards und professionellen Service.',
    fullDesc: 'Als offizieller Partner des Euromaster-Netzwerks halten wir uns an strenge europäische Servicequalitätsstandards. Das bedeutet transparente Preise, die Verwendung von Originalteilen und die kontinuierliche Weiterbildung unserer Mitarbeiter.',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80'
    ],
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  }
];