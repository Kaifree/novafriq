import { Link } from 'react-router-dom'
import { ArrowRightIcon, ExternalLinkIcon } from '../components/icons'
import PlaceholderImg from '../components/PlaceholderImg'
import StatCounter from '../components/StatCounter'
import AfriqueIllustration from '../components/AfriqueIllustration'
import Reveal from '../components/Reveal'
import useInViewport from '../hooks/useInViewport'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Home.css'

const POURQUOI = [
  {
    name: 'Expertise multidisciplinaire',
    desc: "Développement, design, formation, communication et industrie réunis sous un même groupe pour porter vos projets de bout en bout.",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
  {
    name: 'Vision africaine',
    desc: "Nous concevons pour les réalités du continent : connectivité, langues, usages et paiements locaux, pas des solutions importées telles quelles.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    name: 'Innovation continue',
    desc: "IA, automatisation, plateformes : nous investissons en continu dans les technologies qui donneront à nos clients une longueur d'avance.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    name: 'Méthode agile',
    desc: "Des cycles courts, une communication transparente et des livrables réguliers pour avancer vite sans sacrifier la qualité.",
    icon: (
      <>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
  },
  {
    name: 'Équipe expérimentée',
    desc: "Une équipe fondatrice pluridisciplinaire, engagée depuis le premier jour, qui grandit avec des profils rigoureusement sélectionnés.",
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
    name: 'Accompagnement durable',
    desc: "Notre relation ne s'arrête pas au déploiement : suivi, maintenance et évolution font partie de chaque engagement NovafriQ.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
]

const PILIERS = [
  {
    name: 'Mode & Artisanat',
    desc: "Des plateformes dédiées aux créateurs de mode, designers et artisans africains pour valoriser leur savoir-faire à l'échelle mondiale.",
    icon: <path d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    name: 'SaaS Métier',
    desc: "Des outils de gestion, d'automatisation et de productivité adaptés aux réalités et contraintes des entreprises africaines.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    name: 'FinTech',
    desc: 'Des solutions de paiement, de transfert et de gestion financière conçues pour les marchés africains, y compris les populations non bancarisées.',
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    name: 'Éducation',
    desc: "Des plateformes d'apprentissage en ligne et de formation professionnelle pour démocratiser l'accès aux compétences numériques et techniques.",
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
]

export default function Home() {
  useDocumentMeta(
    "NovafriQ Groupe SAS — Construire l'Afrique numérique",
    "NovafriQ Groupe SAS est un groupe technologique panafricain qui conçoit, développe et déploie des plateformes numériques à fort impact pour les entrepreneurs, créateurs et professionnels africains."
  )
  const { ref: pourquoiRef, inView: pourquoiInView } = useInViewport()

  return (
    <div id="page-home">
      <section className="hero">
        <div className="hero-halo hero-halo-cyan" aria-hidden="true"></div>
        <div className="hero-halo hero-halo-bleu" aria-hidden="true"></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-lines"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">NovafriQ Groupe SAS</div>
          <h1 className="hero-title">
            Nous construisons<br />
            les outils numériques<br />
            de <em>l'Afrique de demain.</em>
          </h1>
          <p className="hero-subtitle">
            NovafriQ est un groupe technologique panafricain qui conçoit, développe et déploie des plateformes numériques à fort impact pour les entrepreneurs, créateurs et professionnels africains.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/produits">
              Découvrir nos produits
              <ArrowRightIcon />
            </Link>
            <Link className="btn-secondary on-light" to="/vision">Notre vision</Link>
          </div>
        </div>

        <div className="hero-illustration" aria-hidden="true">
          <AfriqueIllustration />
        </div>

        <div className="hero-stats">
          <StatCounter value={1} label="Produit actif" />
          <StatCounter value={4} label="Piliers stratégiques" />
          <div className="hero-stat">
            <span className="hero-stat-num">∞</span>
            <span className="hero-stat-label">Ambition africaine</span>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="qui-sommes-nous">
            <div className="section-label">Qui sommes-nous ?</div>
            <h2 className="section-title">Un groupe technologique<br />panafricain, né au Bénin.</h2>
            <p>NovafriQ Groupe SAS conçoit, développe et déploie des plateformes numériques pensées pour les réalités africaines. Notre raison d'être : donner aux entrepreneurs, créateurs et professionnels du continent les mêmes outils que ceux dont disposent les meilleures entreprises mondiales — adaptés à leur contexte, pas simplement importés.</p>
            <p>Fondé en 2024 à Sèmè-Podji, le groupe a démarré avec une conviction simple et s'est depuis structuré autour de plusieurs pôles complémentaires — produits, formation, conseil et technologies industrielles — pour bâtir, à terme, l'écosystème technologique de référence en Afrique.</p>
            <Link className="btn-secondary on-light" to="/vision">Découvrir notre vision <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-label">Nos domaines</div>
          <h2 className="section-title">Quatre piliers.<br />Un écosystème.</h2>
          <p className="section-intro">NovafriQ intervient là où le numérique peut transformer durablement la vie des Africains : le commerce, la finance, le savoir et les outils métier.</p>

          <div className="piliers-grid">
            {PILIERS.map((p, i) => (
              <Reveal className="pilier-card" index={i} key={p.name}>
                <div className="pilier-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{p.icon}</svg>
                </div>
                <div className="pilier-name">{p.name}</div>
                <p className="pilier-desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-label">Pourquoi NovafriQ</div>
          <h2 className="section-title">Pourquoi choisir<br />NovafriQ.</h2>
          <p className="section-intro">Ce qui distingue notre approche des autres prestataires numériques du continent.</p>

          <div className="valeurs-grid cols-3" ref={pourquoiRef}>
            {POURQUOI.map((p, i) => (
              <div
                className={`valeur-item reveal${pourquoiInView ? ' in-view' : ''}`}
                key={p.name}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="valeur-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{p.icon}</svg>
                </div>
                <div className="valeur-name">{p.name}</div>
                <p className="valeur-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="section-label">Notre flagship</div>
          <h2 className="section-title">Gextimo, notre premier<br />produit en ligne.</h2>
          <p className="section-intro">La marketplace dédiée aux créateurs de mode africains — designers, tailleurs et artisans.</p>

          <div className="produit-apercu">
            <div>
              <PlaceholderImg variant="wide" label="Bannière Gextimo" dim="1200 × 450 px recommandé" />
            </div>
            <div>
              <div className="produit-apercu-title">
                <div className="gextimo-wordmark">Gextimo</div>
                <span className="produit-status status-live">En ligne</span>
              </div>
              <p className="produit-apercu-desc">
                La première marketplace panafricaine dédiée aux créateurs de mode. Gextimo connecte designers, tailleurs et artisans à une clientèle qui valorise l'authenticité et le savoir-faire africain.
              </p>
              <p className="produit-apercu-quote">
                "Créez — Gérez — Rayonnez."
              </p>
              <a className="btn-primary" href="https://gextimo.novafriq.africa" target="_blank" rel="noreferrer">
                Visiter Gextimo
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Travaillons ensemble</div>
          <h2 className="section-title light" style={{ maxWidth: 600, margin: '0 auto 20px' }}>Vous avez un projet.<br />Nous avons les outils.</h2>
          <p className="section-intro light" style={{ margin: '0 auto 40px' }}>Que vous soyez investisseur, partenaire stratégique ou entrepreneur, NovafriQ est ouvert à toute collaboration porteuse d'impact.</p>
          <Link className="btn-primary" to="/contact">Prendre contact</Link>
        </div>
      </section>
    </div>
  )
}
