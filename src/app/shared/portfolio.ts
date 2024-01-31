import { Portfolio } from './interfaces/portfolio';

export const PORTFOLIOS: Portfolio[] = [
  {
    _id: 1,
    title: 'Installation',
    category: 'app',
    description: "Installation d'un ficher sur un serveur dédié chez ionos",
    date: '09/07/2023',
    image: 'assets/img/portfolio/installation.png',
  },
  {
    _id: 2,
    title: "(Synchronisation avec d'autres calendriers) Lavarel - Airbnb clone",
    category: 'app',
    description:
      "Le BOUTON (Synchroniser avec d'autres calendriers)\nIl est déjà programmé et fonctionnel seulement qu'il fonctionne manuellement j'explique seulement qu'une action humaine doit l'engager pour réaliser la tâche. J'aimerais l'automatiser J'aimerais que le site Web le fasse de manière automatisée toutes les 30 minutes.\nVoici une petite description qui est répertoriée sur le site.\nMontrez aux voyageurs quand ils peuvent réserver !\nVous pouvez toujours mettre à jour manuellement votre calendrier pour bloquer des dates ou les rendre disponibles.",
    image: 'assets/img/portfolio/calendar-airnbnb.jpg',
    date: '30/07/2022',
  },
  {
    _id: 3,
    title:
      "Statistiques sur 100+ fichier d'export HTML de conversations WhatsApp",
    category: 'card',
    description:
      "Ces fichiers HTML ont le meme format qu'une conversation WhatsApp classique, messages ecrits, photos, vidéos, notes vocales, différents paricipants aus groupes etc...\nNous aimerions savoir, quel est le temps moyen de réponses des messages, combien de messages traités par jour, combien de relances par jour, a t-on oublié de répondre a des clients...",
    date: '07/06/2022',
    image: 'assets/img/portfolio/export-whatsapp.jpg',
  },
  {
    _id: 4,
    title: 'Laravel Email Responsive Tableau Markdown',
    category: 'app',
    description:
      "J'ai créé un site sous Laravel, j'ai mis en place un système d'email et celui-ci fonctionne. Par contre j'ai un soucis pour designé un tableau HTML/CSS avec les markdowns. Je cherche quelqu'un pouvant m'aider a regler ce soucis en installant en local la plateforme et en faisant un lien via mailtrap pour tester le rendu visuelle .\n Je souhaiterais rendre le tableau le tableau responsive via via mediaquery.",
    image: 'assets/img/portfolio/laravel-mail-markdown.jpg',
    date: '03/04/2022',
  },
  {
    _id: 5,
    title: 'Petit script avec node.js',
    category: 'web',
    description:
      "J'ai un script en node.js qui fonctionne bien mais je souhaite juste personnaliser.",
    image: 'assets/img/portfolio/coding.jpg',
    date: '02/04/2022',
  },
];
