import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PosteItem from '../components/PosteItem'
import { ArrowRightIcon } from '../components/icons'
import { useToast } from '../components/ToastContext'
import './Carrieres.css'

const POSTES = [
  { titre: 'Développeur Frontend React', lieu: 'Sèmè-Podji / Télétravail', type: 'Temps plein' },
  { titre: 'Développeur Backend Node.js / PHP', lieu: 'Sèmè-Podji / Télétravail', type: 'Temps plein' },
  { titre: 'Community Manager — Mode & Culture africaine', lieu: 'Sèmè-Podji', type: 'Temps plein' },
  { titre: 'Chef de Projet Digital', lieu: 'Sèmè-Podji', type: 'Temps plein' },
]

export default function Carrieres() {
  const showToast = useToast()

  return (
    <div id="page-carrieres">
      <PageHero crumb="Carrières" title={<>Rejoignez l'équipe<br />NovafriQ.</>}>
        Nous cherchons des personnes qui veulent construire, pas seulement travailler.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="carrieres-header">
            <div>
              <div className="section-label">Pourquoi nous rejoindre</div>
              <h2 className="section-title">Un terrain de jeu unique.</h2>
            </div>
            <p className="carrieres-header-text">Chez NovafriQ, chaque membre de l'équipe a un impact direct sur les produits que des milliers d'Africains utilisent. Nous sommes une startup en croissance, avec les avantages qui vont avec : liberté, responsabilité, impact réel.</p>
          </div>

          <div className="section-label">Postes ouverts</div>
          <h3 className="postes-heading">Offres actuelles</h3>

          <div className="postes-liste">
            {POSTES.map((p) => (
              <PosteItem
                key={p.titre}
                titre={p.titre}
                lieu={p.lieu}
                type={p.type}
                onClick={() => showToast('Candidature en cours de traitement...')}
              />
            ))}
          </div>

          <div className="spontanee-box">
            <div>
              <h3>Candidature spontanée</h3>
              <p>Vous ne trouvez pas le poste qui correspond à votre profil ? Envoyez-nous votre candidature spontanée. Nous lisons chaque message.</p>
            </div>
            <Link className="btn-primary" to="/contact">
              Envoyer ma candidature
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
