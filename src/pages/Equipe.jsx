import PageHero from '../components/PageHero'
import MembreCard from '../components/MembreCard'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Equipe.css'

const MEMBRES = [
  {
    nom: 'SAGBOHAN Aquilas',
    poste: 'Développeur Frontend',
    desc: "Interfaces, expérience utilisateur et intégration visuelle des produits NovafriQ.",
    badge: 'Co-Associé',
    photo: '/team/associe-1.png',
  },
  {
    nom: 'KOUNOU A. Marcus Promide',
    poste: 'Développeur Backend',
    desc: 'Architecture serveur, bases de données et logique métier des solutions NovafriQ.',
    badge: 'Co-Associé',
    photo: '/team/associe-2.jpg',
  },
  {
    nom: 'OGOUMA S. Tania Grazelia',
    poste: 'Community Manager',
    desc: 'Présence digitale, relation communauté et voix de NovafriQ sur les réseaux sociaux.',
    badge: 'Co-Associée',
  },
  {
    nom: 'ACCLOMBESSI Pedro',
    poste: 'Chef de Projet',
    desc: "Coordination des livrables, suivi des jalons et cohérence d'ensemble des projets du groupe.",
    badge: 'Co-Associé',
    photo: '/team/associe-4.jpg',
  },
]

export default function Equipe() {
  useDocumentMeta(
    'Notre Équipe — NovafriQ Groupe SAS',
    "Découvrez l'équipe fondatrice de NovafriQ Groupe SAS, à l'origine du groupe technologique panafricain."
  )
  return (
    <div id="page-equipe">
      <PageHero crumb="Notre équipe" title={<>Les personnes qui<br />bâtissent NovafriQ.</>}>
        Quatre profils, une seule conviction : construire les outils que l'Afrique mérite.
      </PageHero>

      <section className="section section-light">
        <div className="container">
          <div className="equipe-intro">
            <div className="section-label">Équipe de démarrage</div>
            <h2 className="section-title">Ceux qui ont dit oui<br />dès le premier jour.</h2>
            <p>Avant les investisseurs, avant les premiers clients, avant la notoriété, il y avait une équipe. Ces quatre personnes ont choisi NovafriQ quand c'était encore une idée sur papier. Leurs rôles évolueront avec le groupe ; leurs noms resteront associés à son origine.</p>
          </div>

          <div className="equipe-grid">
            {MEMBRES.map((m, i) => (
              <MembreCard key={m.nom} index={i} {...m} />
            ))}
          </div>

          <div className="equipe-note">
            <strong>Cette page est mise à jour au fil du temps.</strong> Les postes, photos et descriptions évoluent avec la croissance du groupe. Chaque membre de l'équipe est consulté avant toute modification qui le concerne.
          </div>
        </div>
      </section>
    </div>
  )
}
