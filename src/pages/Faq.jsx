import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Faq.css'

const FAQS = [
  {
    q: 'Qu\'est-ce que NovafriQ Groupe SAS ?',
    a: "NovafriQ est un groupe technologique panafricain, basé à Sèmè-Podji au Bénin, qui conçoit, développe et déploie des plateformes numériques pensées pour les réalités africaines. Le groupe s'organise autour de cinq pôles : innovation, formation, logiciels, communication et technologies industrielles.",
  },
  {
    q: 'Qu\'est-ce que Gextimo ?',
    a: 'Gextimo est le premier produit du groupe : une marketplace panafricaine qui connecte designers, tailleurs et artisans de mode à leur clientèle. Elle est accessible en ligne dès aujourd\'hui.',
  },
  {
    q: 'NovafriQ propose-t-il des services sur mesure aux entreprises ?',
    a: 'Oui. Au-delà de ses propres produits, NovafriQ accompagne les organisations sur le développement logiciel, les applications mobiles et web, l\'intelligence artificielle, l\'automatisation, la cybersécurité, le conseil et la communication digitale.',
  },
  {
    q: 'Comment devenir partenaire ou investisseur ?',
    a: 'Nous sommes ouverts à toute collaboration porteuse d\'impact. Rendez-vous sur notre page Partenaires ou écrivez-nous directement via le formulaire de contact en précisant l\'objet "Partenariat stratégique" ou "Investissement".',
  },
  {
    q: 'NovafriQ recrute-t-il ?',
    a: 'Nous recrutons régulièrement de nouveaux talents. Consultez notre page Carrières pour voir les postes ouverts, ou envoyez-nous une candidature spontanée.',
  },
  {
    q: 'Dans quels pays NovafriQ est-il présent ?',
    a: 'Le groupe est né au Bénin et opère aujourd\'hui à l\'échelle panafricaine à travers ses produits numériques, avec une ambition d\'expansion progressive sur le continent.',
  },
  {
    q: 'Combien de temps dure un projet avec NovafriQ ?',
    a: 'Cela dépend de l\'ampleur du projet. Notre méthode en six étapes — écoute, analyse, conception, développement, déploiement, accompagnement — permet d\'estimer un calendrier précis dès les premiers échanges.',
  },
  {
    q: 'NovafriQ propose-t-il de la formation ?',
    a: 'Oui, la formation est l\'un de nos cinq pôles stratégiques : bootcamps, masterclass et coaching pour faire monter en compétence les talents technologiques africains.',
  },
  {
    q: 'Comment contacter l\'équipe NovafriQ ?',
    a: 'Le plus simple est d\'utiliser le formulaire sur notre page Contact. Vous pouvez aussi nous écrire directement à direction@novafriq.africa.',
  },
]

export default function Faq() {
  useDocumentMeta(
    'FAQ — NovafriQ Groupe SAS',
    'Toutes les réponses à vos questions sur NovafriQ, ses produits et sa façon de travailler.'
  )
  return (
    <div id="page-faq">
      <PageHero crumb="FAQ" title="Vos questions, nos réponses.">
        Tout ce qu'il faut savoir sur NovafriQ, nos produits et notre façon de travailler.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="faq-list">
            {FAQS.map((item) => (
              <details className="faq-item" name="faq" key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <div className="faq-cta">
            <p>Vous ne trouvez pas la réponse à votre question ?</p>
            <Link className="btn-primary" to="/contact">Contactez-nous</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
