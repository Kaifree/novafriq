import PageHero from '../components/PageHero'
import PlaceholderImg from '../components/PlaceholderImg'
import PoleCard from '../components/PoleCard'
import Timeline from '../components/Timeline'
import Reveal from '../components/Reveal'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Vision.css'

const POLES = [
  {
    name: 'Innovation',
    color: 'var(--or)',
    items: ['Produits SaaS', 'Intelligence artificielle', 'Applications', 'Plateformes'],
    icon: (
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.6c.6.5 1 1.3 1 2.4h6c0-1.1.4-1.9 1-2.4A7 7 0 0 0 12 2z" />
    ),
  },
  {
    name: 'Formation',
    color: 'var(--or)',
    items: ['Bootcamps', 'Masterclass', 'Coaching'],
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    name: 'Logiciels',
    color: 'var(--or)',
    items: ['ERP', 'Applications métier', 'Développement web', 'Cybersécurité'],
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    name: 'Communication',
    color: 'var(--or)',
    items: ['Branding', 'Marketing digital', 'Community Management'],
    icon: (
      <>
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
  },
  {
    name: 'Technologies industrielles',
    color: 'var(--or)',
    items: ['Vision long terme', 'Équipements technologiques', 'Innovation industrielle'],
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
  },
]

const ROADMAP = [
  { marker: '2024', title: 'Création de NovafriQ', desc: 'Naissance officielle du groupe à Sèmè-Podji, Bénin.' },
  { marker: '2025', title: 'Lancement de Gextimo', desc: 'Ouverture publique de notre marketplace mode & artisanat.' },
  { marker: '2026', title: 'Développement des services', desc: 'Élargissement de l\'offre : SaaS métier, IA, cybersécurité, conseil.' },
  { marker: '2027', title: 'Centre de formation', desc: 'Ouverture d\'un centre dédié aux talents technologiques africains.' },
  { marker: '2028', title: 'Expansion africaine', desc: 'Déploiement de nos solutions dans de nouveaux marchés du continent.' },
  { marker: '2030+', title: 'Technologies industrielles', desc: 'Investissement dans l\'innovation et les équipements technologiques lourds.' },
]

const ENGAGEMENTS = [
  {
    name: 'Souveraineté numérique',
    desc: 'Nos produits sont conçus pour donner aux Africains le contrôle de leurs données, de leur commerce et de leur identité numérique.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    name: 'Impact continental',
    desc: 'Chaque produit que nous lançons est pensé pour fonctionner à travers les frontières et les cultures du continent africain.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    name: "Excellence d'exécution",
    desc: 'Nous refusons les compromis sur la qualité. Un produit NovafriQ doit être aussi bien conçu qu\'un produit de niveau mondial.',
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  {
    name: "Communauté d'abord",
    desc: 'Nos utilisateurs ne sont pas des clients. Ce sont des membres d\'un écosystème que nous construisons ensemble.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    name: 'Confiance & sécurité',
    desc: 'La conformité légale et la protection des données ne sont pas des contraintes pour nous — elles sont des fondements.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    name: 'Expérience utilisateur',
    desc: 'Un produit difficile à utiliser est un produit qui ne remplit pas sa mission. Nous concevons pour la simplicité et la fluidité.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </>
    ),
  },
]

export default function Vision() {
  useDocumentMeta(
    'Notre Vision — NovafriQ Groupe SAS',
    "Une conviction profonde : l'Afrique n'a pas besoin de copier, elle a besoin d'outils conçus pour elle, par elle. Découvrez la vision, la mission et les engagements de NovafriQ."
  )
  return (
    <div id="page-vision">
      <PageHero crumb="Notre Vision" title="Pourquoi NovafriQ existe.">
        Une conviction profonde : l'Afrique n'a pas besoin de copier. Elle a besoin d'outils conçus pour elle, par elle.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="vision-layout">
            <div className="vision-text">
              <div className="section-label">Notre raison d'être</div>
              <h2 className="section-title">Bâtir l'infrastructure numérique de l'Afrique.</h2>

              <div className="vision-quote">
                <p>"L'Afrique est le continent qui compte le plus grand nombre de jeunes au monde. Leur donner les bons outils numériques, c'est libérer une énergie sans équivalent."</p>
                <cite>— Patrick Dona Adjaho, Président & Fondateur, NovafriQ Groupe SAS</cite>
              </div>

              <p>NovafriQ est né d'un constat simple : les solutions numériques disponibles sur le marché africain sont rarement pensées pour ses réalités. Elles ignorent les contraintes de connectivité, les habitudes de paiement, les langues locales et les dynamiques communautaires qui font la richesse de ce continent.</p>
              <p>Nous construisons différemment. Chaque produit NovafriQ part du terrain, des besoins réels des entrepreneurs, créateurs, apprenants et professionnels africains. Nous croyons que la technologie n'a de valeur que si elle est adoptée, et qu'elle n'est adoptée que si elle répond à une réalité vécue.</p>
              <p>Notre ambition est de devenir le groupe technologique de référence en Afrique francophone et au-delà — en faisant de chaque produit un levier de souveraineté numérique pour ceux qui l'utilisent.</p>
            </div>

            <div className="vision-image">
              <div className="fondateur-img-wrap">
                <PlaceholderImg label="Photo ou visuel" dim="Portrait ou illustration — 600 × 800 px" />
                <div className="vision-badge">
                  <span className="vision-badge-num">2024</span>
                  <span className="vision-badge-txt">Année de création</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-label">Nos engagements</div>
          <h2 className="section-title">Ce en quoi nous croyons.</h2>

          <div className="valeurs-grid cols-3">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal className="valeur-item" index={i} key={e.name}>
                <div className="valeur-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{e.icon}</svg>
                </div>
                <div className="valeur-name">{e.name}</div>
                <p className="valeur-desc">{e.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-label">Notre mission</div>
          <h2 className="section-title">Bâtir l'écosystème technologique<br />de référence en Afrique.</h2>
          <p className="section-intro">Notre mission est de concevoir, développer et déployer des solutions numériques qui répondent aux besoins réels du continent — et de former les talents qui les feront vivre. Nous avançons sur cinq fronts complémentaires : innovation, formation, logiciels, communication et technologies industrielles.</p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-label">Notre organisation</div>
          <h2 className="section-title">Cinq pôles stratégiques.</h2>
          <p className="section-intro">Chaque pôle porte une part de notre mission et avance selon son propre rythme, au service d'une même ambition.</p>

          <div className="poles-grid">
            {POLES.map((p, i) => (
              <PoleCard key={p.name} index={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-label">Notre feuille de route</div>
          <h2 className="section-title">De 2026 à l'expansion<br />continentale.</h2>
          <p className="section-intro">Les grandes étapes qui jalonnent la construction du groupe.</p>

          <Timeline orientation="horizontal" items={ROADMAP} />
        </div>
      </section>
    </div>
  )
}
