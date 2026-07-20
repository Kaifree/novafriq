import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProduitCard from '../components/ProduitCard'
import PlaceholderImg from '../components/PlaceholderImg'
import Timeline from '../components/Timeline'
import Reveal from '../components/Reveal'
import { ExternalLinkIcon } from '../components/icons'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Produits.css'

const GEXTIMO_FEATURES = [
  'Boutique en ligne personnalisée pour chaque créateur',
  'Gestion des commandes et des stocks simplifiée',
  'Paiement mobile et livraison intégrés',
  'Mise en avant du savoir-faire artisanal africain',
]

const SERVICES = [
  {
    name: 'Développement logiciel',
    desc: "Applications métier et systèmes sur mesure, conçus pour durer et évoluer avec votre activité.",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    name: 'Applications mobiles',
    desc: "Des applications iOS et Android natives ou hybrides, pensées pour les usages et la connectivité africaine.",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </>
    ),
  },
  {
    name: 'Applications web',
    desc: "Plateformes et interfaces web performantes, accessibles et responsives sur tous les écrans.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    name: 'Intelligence artificielle',
    desc: "Automatisation intelligente, analyse de données et intégration de modèles d'IA dans vos outils métier.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </>
    ),
  },
  {
    name: 'Automatisation',
    desc: "Des flux de travail automatisés qui font gagner du temps à vos équipes et fiabilisent vos opérations.",
    icon: (
      <>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
  },
  {
    name: 'Cybersécurité',
    desc: "Protection des données, des accès et des infrastructures pour des systèmes numériques dignes de confiance.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    name: 'Formation',
    desc: "Bootcamps, masterclass et coaching pour faire monter en compétence vos équipes techniques.",
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    name: 'Conseil',
    desc: "Un accompagnement stratégique pour structurer votre transformation digitale, étape par étape.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    name: 'Communication digitale',
    desc: "Branding, marketing digital et community management pour donner de la voix à votre marque.",
    icon: (
      <>
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
  },
]

const METHODE = [
  { marker: '01', title: 'Écoute', desc: "Nous prenons le temps de comprendre votre contexte, vos contraintes et vos objectifs réels." },
  { marker: '02', title: 'Analyse', desc: "Étude approfondie des besoins, du marché et des solutions techniques possibles." },
  { marker: '03', title: 'Conception', desc: "Architecture, design et parcours utilisateur sont pensés avant la première ligne de code." },
  { marker: '04', title: 'Développement', desc: "Construction itérative de la solution, avec des points d'étape réguliers et transparents." },
  { marker: '05', title: 'Déploiement', desc: "Mise en production sécurisée, tests et passage de relais dans les meilleures conditions." },
  { marker: '06', title: 'Accompagnement', desc: "Suivi, maintenance et évolution : notre relation continue bien après la livraison." },
]

export default function Produits() {
  useDocumentMeta(
    'Nos Produits — NovafriQ Groupe SAS',
    "Gextimo, la marketplace panafricaine dédiée aux créateurs de mode, et l'ensemble des services numériques (développement, IA, cybersécurité, conseil) proposés par NovafriQ."
  )
  return (
    <div id="page-produits">
      <PageHero crumb="Nos Produits" title={<>Notre portefeuille<br />de produits.</>}>
        Chaque produit NovafriQ est une réponse précise à un besoin réel. Gextimo est le premier. D'autres suivront.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="produits-grid">
            <ProduitCard
              index={0}
              href="https://gextimo.novafriq.africa"
              active
              bannerClassName="gextimo-bg"
              banner={<div className="produit-logo-gextimo">Gextimo</div>}
              status="live"
              statusLabel="En ligne"
              tagline="Mode & Artisanat numérique"
              name="Gextimo"
              desc="La marketplace panafricaine qui connecte designers, tailleurs et artisans à leurs clients. Un espace pour créer, gérer et rayonner."
              linkLabel="Visiter Gextimo"
            />

            <ProduitCard
              index={1}
              status="coming"
              statusLabel="À venir"
              banner={(
                <div className="produit-logo-ph">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(39,198,217,0.4)" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                  <span>Logo</span>
                </div>
              )}
              tagline="SaaS Métier"
              name="Produit 2"
              desc="Un outil SaaS dédié aux PME africaines pour simplifier leur gestion opérationnelle et accélérer leur croissance."
              linkLabel="Bientôt disponible"
            />

            <ProduitCard
              index={2}
              status="coming"
              statusLabel="À venir"
              banner={(
                <div className="produit-logo-ph">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(39,198,217,0.4)" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                  <span>Logo</span>
                </div>
              )}
              tagline="FinTech"
              name="Produit 3"
              desc="Une solution financière pensée pour les entrepreneurs africains : paiements, transferts et gestion multi-devises sans barrières."
              linkLabel="Bientôt disponible"
            />
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-label">Notre premier produit</div>
          <h2 className="section-title">Gextimo, en détail.</h2>
          <p className="section-intro">Un aperçu de ce que Gextimo apporte aux créateurs de mode et artisans africains.</p>

          <div className="gextimo-spotlight-layout">
            <div className="gextimo-shots">
              <PlaceholderImg variant="wide" label="Écran d'accueil Gextimo" dim="Aperçu — 1200 × 750 px" />
              <div className="gextimo-shots-row">
                <PlaceholderImg variant="square" label="Boutique créateur" />
                <PlaceholderImg variant="square" label="Suivi des commandes" />
              </div>
            </div>
            <div className="gextimo-info">
              <h3>Créez, gérez, rayonnez.</h3>
              <ul className="gextimo-features">
                {GEXTIMO_FEATURES.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="gextimo-benefits">
                Gextimo donne aux créateurs une visibilité auprès d'une clientèle panafricaine et internationale, des outils de gestion pensés pour les réalités du terrain, et un accompagnement dans la croissance de leur activité.
              </p>
              <a className="btn-primary" href="https://gextimo.novafriq.africa" target="_blank" rel="noreferrer">
                Découvrir Gextimo
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-label">Nos services</div>
          <h2 className="section-title">Au-delà des produits,<br />une expertise complète.</h2>
          <p className="section-intro">NovafriQ accompagne aussi les organisations qui veulent construire leurs propres solutions numériques.</p>

          <div className="valeurs-grid cols-3">
            {SERVICES.map((s, i) => (
              <Reveal className="valeur-item" index={i} key={s.name}>
                <div className="valeur-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{s.icon}</svg>
                </div>
                <div className="valeur-name">{s.name}</div>
                <p className="valeur-desc">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-label">Notre méthode</div>
          <h2 className="section-title">Comment nous travaillons.</h2>
          <p className="section-intro">Une méthode claire, en six étapes, appliquée à chaque projet quelle que soit son ampleur.</p>

          <Timeline orientation="vertical" items={METHODE} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="produits-cta">
            <div className="section-label" style={{ justifyContent: 'center' }}>Vous construisez quelque chose ?</div>
            <h3>Rejoignez l'écosystème NovafriQ.</h3>
            <p>Si vous avez un projet numérique à fort potentiel pour l'Afrique, nous sommes ouverts à la discussion.</p>
            <Link className="btn-primary" to="/contact">Discutons de votre projet</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
