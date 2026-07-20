# Audit frontend — NovafriQ

Audit du site vitrine `novafriq` (React/Vite, `Kaifree/novafriq`, branche `main`) : 10 pages, tous les composants partagés, config build/lint, SEO et accessibilité.

---

## 🔴 Critique — fonctionnalités cassées en production

1. **Le formulaire de contact ne fonctionne pas.**
   `src/components/ContactForm.jsx:5` pointe vers `https://formspree.io/f/VOTRE_ID_FORMSPREE` — un ID placeholder jamais remplacé. C'est le canal de conversion principal du site (investisseurs, candidatures, partenariats) et il échoue silencieusement à chaque soumission réelle.

2. **Numéro de téléphone factice affiché publiquement.**
   `+229 00 00 00 00` sur la page Contact (`src/pages/Contact.jsx:67`).

3. **Tous les liens réseaux sociaux sont morts.**
   Footer + page Contact : chaque bouton LinkedIn/X/Instagram/YouTube ouvre un toast "lien à configurer" au lieu de rediriger vers un vrai profil.

4. **La newsletter ne s'inscrit nulle part.**
   Le formulaire du footer affiche un toast de succès mais n'envoie l'email à aucun service (pas de Mailchimp/Brevo/API).

5. **Pages légales inexistantes.**
   Mentions légales, Politique de confidentialité, CGU sont des boutons qui affichent "Page en cours de rédaction". Avec un formulaire qui collecte nom/email/message, l'absence totale de politique de confidentialité est un vrai trou de conformité.

6. **Candidature Carrières factice.**
   Cliquer sur une offre affiche juste "Candidature en cours de traitement..." — aucun vrai mécanisme de candidature (pas de lien mailto, pas d'upload CV, pas de lien ATS).

---

## 🟠 Incohérences de contenu (nuisent à la crédibilité)

7. **Trois dates de fondation différentes sur le site :**
   - Home : *"Fondé en 2024 à Sèmè-Podji"* (`src/pages/Home.jsx:158`)
   - Vision : badge *"2024 — Année de création"* (`src/pages/Vision.jsx:158`)
   - Vision roadmap : *"2026 — Création de NovafriQ"* présenté comme une étape à venir (`src/pages/Vision.jsx:64`)

   Un visiteur qui lit deux pages voit une contradiction directe sur l'année de naissance de l'entreprise.

8. **Roadmap non mise à jour.**
   *"2027 — Lancement de Gextimo"* y est présenté comme futur, alors que Gextimo est déjà en ligne partout ailleurs sur le site (statut "live").

9. **Page Partenaires trompeuse.**
   Titre *"Ils nous font confiance"* au-dessus de 4 emplacements de logo vides. Affirmer une preuve sociale avec rien derrière est pire que ne rien dire — ça se lit comme un oubli, pas comme une promesse.

10. **Copyright footer figé à "© 2024".**
    À générer dynamiquement (`new Date().getFullYear()`) plutôt qu'en dur.

---

## 🟡 SEO

11. **Aucun `<title>`/meta par page.**
    Les 10 routes partagent le même titre et la même description définis une fois dans `index.html`. Google indexera 10 pages identiques en méta ; un partage LinkedIn/WhatsApp d'un lien `/produits` affichera le titre de la home.

12. **Image OG absente.**
    Un commentaire TODO dans `index.html` l'admet déjà. Sans elle, tout partage sur réseaux sociaux n'affiche aucune vignette.

13. **Aucune donnée structurée JSON-LD** (Organization/LocalBusiness) — opportunité manquée pour les rich snippets et la confiance investisseur en recherche.

---

## 🟡 Performance

14. **Polices Google chargées via `@import` en CSS** (`src/styles/theme.css:1`) plutôt qu'un `<link rel="preconnect">` + `<link>` dans `<head>`. Ça sérialise les requêtes (CSS → découverte de l'import → CSS Google → fichiers de police) au lieu de les paralléliser, ce qui retarde l'affichage du texte.

---

## 🟡 Accessibilité

15. Pas de lien "aller au contenu" avant le header.

16. **Aucune route 404** dans `src/App.jsx` — une URL invalide affiche une page vide (header/footer sans contenu) plutôt qu'un message clair.

17. Beaucoup d'icônes SVG décoratives (piliers, valeurs, pôles — une quarantaine au total) ne sont pas marquées `aria-hidden="true"`, contrairement à l'icône du hero qui l'est correctement.

---

## ⚪ Process d'ingénierie

18. **Aucun test automatisé** (pas de Vitest/Jest/Playwright) — le seul filet avant un push est `npm run build`, qui ne détecte pas une régression logique (comme le formulaire cassé ci-dessus).

19. **Pas de CI** (`.github/workflows` absent) — la discipline "build avant push" repose entièrement sur la mémoire/discipline manuelle.

20. `@types/react`/`@types/react-dom` en devDependencies alors que le projet est en `.jsx` pur — dépendances mortes, mineur.

---

## 📄 Ce qui manque au niveau contenu (vision globale)

- **Zéro visuel réel** : chaque photo (fondateur, équipe, captures Gextimo, logos partenaires) est un `PlaceholderImg`. Le site n'a aucune preuve visuelle huit mois après son lancement apparent.
- **Aucun chiffre concret** sur Gextimo (nombre d'utilisateurs, de créateurs, volume de transactions) — juste du texte marketing générique.
- **Aucun témoignage client** ni logo partenaire réel.
- **Blog "Actualités" 100% vide** — juste 3 catégories "bientôt disponible", aucun vrai article, aucune preuve d'activité récente pour un visiteur ou un journaliste.
- **Mono-langue française** alors que le site vise l'Afrique panafricaine et des investisseurs — l'Afrique anglophone (Nigeria, Ghana, Kenya, Afrique du Sud, les plus gros marchés tech du continent) ne peut pas lire le site.
- **Aucune mention légale d'entreprise** (numéro RCCM, immatriculation) — un partenaire ou investisseur sérieux en due diligence cherchera ça.
- **Pas de grille tarifaire ni de processus de devis** pour les services (dev, IA, conseil...) — la seule action possible est "contactez-nous", sans indication de fourchette de prix ou de délai de réponse commercial.

---

## Priorité recommandée

1. **Formulaire de contact cassé** (#1) — problème silencieux qui fait perdre des leads réels dès aujourd'hui.
2. **Incohérences de dates** (#7, #8) — correction rapide, gain de crédibilité immédiat.
3. Liens sociaux morts, téléphone factice, newsletter fictive (#2-4) — soit les configurer réellement, soit les retirer temporairement.
4. Pages légales a minima (#5).
5. SEO par page (#11, #12) une fois le contenu stabilisé.
