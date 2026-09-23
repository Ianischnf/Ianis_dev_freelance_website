import { MonitorSmartphone, ShoppingBag, Code2 } from 'lucide-react';

// Modifie ici les tarifs et prestations : les cartes se mettront à jour automatiquement.
export const services = [
  {
    id: 'vitrine',
    title: 'Création de sites vitrines',
    icon: MonitorSmartphone,
    description: 'Faites connaître votre activité avec un site internet moderne, responsive et adapté à votre image. Une solution idéale pour présenter vos services et attirer de nouveaux clients.',
    features: [
      'Design personnalisé à votre image',
      'Site adapté aux mobiles et tablettes',
      'Optimisation SEO de base',
      'Accompagnement jusqu’à la mise en ligne',
    ],
    startingPrice: 350,
    priceNote: 'Selon votre projet · Hors hébergement',
  },
  {
    id: 'ecommerce',
    title: 'Création de boutiques e-commerce',
    icon: ShoppingBag,
    description: 'Développez votre activité en ligne avec une boutique e-commerce moderne, intuitive et adaptée à votre image. Je vous accompagne dans la création de votre boutique Shopify, de la conception jusqu’à sa mise en ligne, pour vous aider à vendre vos produits en toute simplicité.',
    features: [
      'Design personnalisé à votre image',
      'Boutique adaptée aux mobiles et tablettes',
      'Création et configuration du catalogue produits',
      'Configuration des paiements et livraisons',
      'Optimisation SEO de base',
      'Accompagnement jusqu’à la mise en ligne',
    ],
    startingPrice: 700,
    priceNote: 'N’inclus pas les frais du thème ou autres logiciels',
  },
  {
    id: 'sur-mesure',
    title: 'Développement web sur mesure',
    icon: Code2,
    description: 'Besoin d’un outil adapté à votre activité ? Je conçois des interfaces, fonctionnalités et applications web personnalisées en fonction de vos besoins.',
    features: [
      'Analyse de vos besoins',
      'Interface responsive et personnalisée',
      'Développement de fonctionnalités spécifiques',
      'Tests et accompagnement au déploiement',
    ],
    startingPrice: null,
    priceNote: 'Tarif établi selon les fonctionnalités demandées',
  },
];
