import PageHero from '../components/PageHero'
import PlaceholderImg from '../components/PlaceholderImg'
import { PersonIcon } from '../components/icons'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Fondateur.css'

export default function Fondateur() {
  useDocumentMeta(
    'Le Fondateur — NovafriQ Groupe SAS',
    "Patrick Dona Adjaho, Président & Fondateur de NovafriQ Groupe SAS, raconte l'histoire et la vision derrière le groupe technologique panafricain."
  )
  return (
    <div id="page-fondateur">
      <PageHero crumb="Le Fondateur" title={<>Pourquoi NovafriQ<br />a été fondé.</>}>
        L'histoire derrière le groupe, racontée par son fondateur.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="fondateur-layout">
            <div className="fondateur-photo">
              <div className="fondateur-img-wrap">
                <PlaceholderImg icon={<PersonIcon />} label="Photo du fondateur" dim="Portrait — 600 × 800 px" />
              </div>
              <div className="fondateur-name-card">
                <div className="fondateur-name">Patrick Dona Adjaho</div>
                <div className="fondateur-title">Président & Fondateur — NovafriQ Groupe SAS</div>
              </div>
            </div>

            <div className="fondateur-content">
              <h3>"J'ai voulu construire les outils que j'aurais aimé avoir en tant qu'entrepreneur africain."</h3>
              <p>NovafriQ est né d'une frustration productive. En cherchant des solutions numériques adaptées aux entrepreneurs d'Afrique francophone, j'ai constaté un vide : des outils génériques pensés ailleurs, importés sans adaptation, souvent trop coûteux ou trop complexes pour la réalité du terrain.</p>
              <p>La réponse n'était pas de s'adapter à ces outils. C'était d'en construire de meilleurs — des solutions nées ici, pensées ici, et déployées pour servir les créateurs, entrepreneurs et professionnels africains avec le niveau d'exigence qu'ils méritent.</p>
              <p>Gextimo est le premier produit de cet écosystème. Il y en aura d'autres. Notre ambition est de bâtir, produit après produit, un groupe technologique qui fait la fierté du continent.</p>

              <div className="valeurs-grid">
                <div className="valeur-item">
                  <div className="valeur-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="valeur-name">Basé au Bénin</div>
                  <p className="valeur-desc">Sèmè-Podji, République du Bénin. Conçu en Afrique pour l'Afrique.</p>
                </div>
                <div className="valeur-item">
                  <div className="valeur-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <div className="valeur-name">Entrepreneur & Bâtisseur</div>
                  <p className="valeur-desc">Vision long terme, exécution concrète, impact mesurable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
