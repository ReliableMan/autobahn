import { 
  Wrench, 
  Car, 
  PaintBucket, 
  SprayCan, 
  Handshake, 
  ShieldCheck // Euromaster
} from 'lucide-react';

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
    icon: Wrench
  },
  {
    id: 2,
    title: 'Räderdepot',
    desc: 'Professionelle Reifenmontage, Auswuchten und saisonale Reifenlagerung in unserem Lager.',
    fullDesc: 'Als Euromaster-Partner bieten wir Ihnen ein umfassendes Räderservice. Dazu gehören professioneller Räderwechsel, Rädereinlagerung und Reparatur von Felgen. Wir beraten Sie individuell bei der Auswahl der richtigen Sommer-, Winter- oder Ganzjahresreifen für Ihr Fahrzeug.',
    gallery: [
      '/images/services/Felge1.webp',
    ],
    icon: Car
  },
  {
    id: 3,
    title: 'Spenglerei und Lackiererei',
    desc: 'Dellenentfernung, Wiederherstellung der Karosseriegeometrie und hochwertige Lackierung.',
    fullDesc: 'Ob kleine Dellen, Kratzer oder größere Unfallschäden – in unserer Spenglerei und Lackiererei bringen wir Ihr Fahrzeug wieder in Form. Wir arbeiten sorgfältig, setzen auf bewährte Reparaturmethoden und hochwertige Lacke, damit Ihr Fahrzeug wieder zuverlässig und perfekt aussieht.',
    gallery: [
      '/images/services/lack5.webp',
    ],
    icon: PaintBucket
  },
  {
    id: 4,
    title: 'Wohnmobilreparatur und Vermietung',
    desc: 'Spezialisierter Service für Camper. Saisonvorbereitung und Vermietung.',
    fullDesc: 'Reparatur und Vermietung von Wohnmobilen aus einer Hand. Von Fahrwerk, Bremsen und Räder über technische Inspektionen bis hin zu Karosseriereparaturen – wir machen Ihr Fahrzeug urlaubsbereit. Kein eigenes Wohnmobil? Mieten Sie bei uns und starten Sie durch.',
    gallery: [
      '/images/services/caravan1.webp',
      '/images/services/caravan3.webp',
    ],
    icon: SprayCan
  },
  {
    id: 5,
    title: 'Autokauf',
    desc: 'Zuverlässige Gebrauchtwagen. Gründliche Inspektion vor dem Verkauf und Garantie.',
    fullDesc: 'Egal, ob Sie ein neues oder gebrauchtes Fahrzeug suchen, wir beraten Sie kompetent und transparent. Unser Team hilft Ihnen, das passende Auto für Ihre Bedürfnisse zu finden.',
    gallery: [
      '/images/services/jeep2.webp',
    ],
    icon: Handshake
  },
  // {
  //   id: 6,
  //   title: 'Euromaster-Partner',
  //   desc: 'Garantie höchster Qualitätsstandards und professionellen Service.',
  //   fullDesc: 'Als offizieller Partner des Euromaster-Netzwerks halten wir uns an strenge europäische Servicequalitätsstandards. Das bedeutet transparente Preise, die Verwendung von Originalteilen und die kontinuierliche Weiterbildung unserer Mitarbeiter.',
  //   gallery: [
  //     'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80'
  //   ],
  //   icon: ShieldCheck
  // }
];