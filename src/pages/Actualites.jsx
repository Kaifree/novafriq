import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PlaceholderImg from '../components/PlaceholderImg'
import Reveal from '../components/Reveal'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Actualites.css'

const CATEGORIES = [
  {
    name: 'Actualités produits',
    desc: "Les nouveautés de Gextimo et des prochains produits NovafriQ : lancements, fonctionnalités, coulisses.",
  },
  {
    name: 'Vie du groupe',
    desc: "Recrutements, partenariats, jalons franchis — ce qui se passe du côté de l'équipe NovafriQ.",
  },
  {
    name: 'Tribunes & analyses',
    desc: "Regards sur la transformation digitale, l'IA et l'innovation technologique en Afrique.",
  },
]

export default function Actualites() {
  useDocumentMeta(
    'Actualités — NovafriQ Groupe SAS',
    'Les actualités du groupe NovafriQ : nouveautés produits, vie du groupe et tribunes sur la tech africaine.'
  )
  return (
    <div id="page-actualites">
      <PageHero crumb="Actualités" title="Les actualités NovafriQ.">
        Le blog du groupe ouvrira bientôt ses portes. Voici ce que vous y retrouverez.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="actualites-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal className="actualite-card" index={i} key={c.name}>
                <PlaceholderImg variant="wide" label={c.name} />
                <div className="actualite-body">
                  <span className="produit-status status-coming">Bientôt disponible</span>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="actualites-cta">
            <div className="section-label" style={{ justifyContent: 'center' }}>Restons en contact</div>
            <h3>Ne manquez aucune actualité.</h3>
            <p>En attendant l'ouverture du blog, inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux.</p>
            <Link className="btn-primary" to="/contact">Nous contacter</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
