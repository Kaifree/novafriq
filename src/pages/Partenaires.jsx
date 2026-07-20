import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { ArrowRightIcon } from '../components/icons'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Partenaires.css'

export default function Partenaires() {
  useDocumentMeta(
    'Partenaires & Investisseurs — NovafriQ Groupe SAS',
    'NovafriQ est ouvert à des partenariats stratégiques, des co-investissements et des collaborations à fort impact sur le continent africain.'
  )
  return (
    <div id="page-partenaires">
      <PageHero crumb="Partenaires & Investisseurs" title={<>Construisons ensemble<br />quelque chose de grand.</>}>
        NovafriQ est ouvert à des partenariats stratégiques, des co-investissements et des collaborations à fort impact sur le continent africain.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="section-label">Nos partenaires</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Ils nous font confiance.</h2>
          <p className="partenaires-intro">Les emplacements ci-dessous seront complétés au fil des partenariats officialisés.</p>

          <div className="partenaires-grid">
            {[1, 2, 3, 4].map((i) => (
              <Reveal as="div" className="partenaire-ph" index={i - 1} key={i}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                <span>Logo partenaire</span>
              </Reveal>
            ))}
          </div>

          <div className="investisseurs-cta">
            <div className="section-label" style={{ justifyContent: 'center' }}>Investisseurs</div>
            <h3>Vous investissez dans le numérique africain ?</h3>
            <p>NovafriQ recherche des partenaires financiers partageant notre vision long terme pour l'Afrique numérique. Nous sommes ouverts à toute discussion sérieuse.</p>
            <Link className="btn-primary" to="/contact">
              Prendre contact
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
