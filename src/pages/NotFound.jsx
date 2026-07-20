import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './NotFound.css'

export default function NotFound() {
  useDocumentMeta(
    'Page introuvable — NovafriQ Groupe SAS',
    "La page que vous cherchez n'existe pas ou a été déplacée."
  )

  return (
    <div id="page-not-found">
      <div className="container not-found-content">
        <div className="not-found-code">404</div>
        <h1>Cette page n'existe pas.</h1>
        <p>Le lien que vous avez suivi est peut-être incorrect, ou la page a été déplacée.</p>
        <Link className="btn-primary" to="/">Retour à l'accueil</Link>
      </div>
    </div>
  )
}
