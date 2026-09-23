# Ianis Dev — site React

Site vitrine React + Vite basé sur ta maquette Figma (fond vert foncé, accent vert, cartes de services et tarifs).

## Démarrer

Prérequis : Node.js 20+.

```bash
npm install
npm run dev
```

Ouvre ensuite l'adresse indiquée par Vite (généralement http://localhost:5173).

Pour générer une version de production :

```bash
npm run build
npm run preview
```

## Architecture

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation responsive
│   │   └── Footer.jsx
│   ├── services/
│   │   ├── ServiceCard.jsx      # Carte réutilisable
│   │   ├── FeatureList.jsx      # Liste de prestations
│   │   └── PriceBlock.jsx      # Prix + demande de devis
│   ├── ButtonLink.jsx          # Bouton de navigation réutilisable
│   └── SectionHeading.jsx      # Titres de pages réutilisables
├── data/
│   └── services.js             # Toutes les données des prestations et tarifs
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx                      # Routes
├── main.jsx
└── styles.css                   # Styles + responsive
```

## À personnaliser avant publication

- **Tarifs** : `src/data/services.js`. J'ai repris **350 €** pour le site vitrine et **700 €** pour la boutique e-commerce, comme sur ta dernière maquette. Confirme que ces prix sont bien ceux que tu souhaites publier.
- **Adresse e-mail** : remplacer `contact@exemple.fr` par ton adresse dans `src/pages/Contact.jsx`.
- **Formulaire** : il fonctionne actuellement avec **mailto** (ouvre la messagerie du visiteur), sans backend et sans envoi automatique. Pour un vrai envoi depuis le navigateur, connecter un service (Formspree, EmailJS...) ou une API Spring Boot et prévoir les mentions légales/RGPD.
- **Identité** : adapter le texte de l'accueil, ton nom commercial et les mentions légales.
- **Hébergement** : utiliser un hébergeur configuré pour renvoyer toutes les routes (`/services`, `/contact`) sur `index.html`.

Aucun faux avis ni faux projet n'est affiché. Tu pourras ajouter une section « Réalisations » quand tu auras des projets publiables.
