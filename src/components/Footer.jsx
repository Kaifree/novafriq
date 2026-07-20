import { Link } from 'react-router-dom'
import { useToast } from './ToastContext'
import './Footer.css'

export default function Footer() {
  const showToast = useToast()

  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/logo/novafriq-logo-marine.png" alt="NovafriQ Groupe SAS" className="footer-logo-img" />
          </Link>
          <p>NovafriQ est un groupe technologique panafricain qui conçoit et déploie des plateformes numériques à fort impact pour l'Afrique.</p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/company/novafriqgrp/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href="https://www.facebook.com/share/1BRvEVR24S/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Le groupe</h4>
          <ul>
            <li><Link to="/vision">Notre vision</Link></li>
            <li><Link to="/fondateur">Le fondateur</Link></li>
            <li><Link to="/equipe">Notre équipe</Link></li>
            <li><Link to="/partenaires">Partenaires</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Nos produits</h4>
          <ul>
            <li><a href="https://gextimo.novafriq.africa" target="_blank" rel="noreferrer">Gextimo</a></li>
            <li><button type="button" onClick={() => showToast('Bientôt disponible')}>Produit 2 (bientôt)</button></li>
            <li><button type="button" onClick={() => showToast('Bientôt disponible')}>Produit 3 (bientôt)</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact & RH</h4>
          <ul>
            <li><Link to="/contact">Nous écrire</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/carrieres">Carrières</Link></li>
            <li><Link to="/partenaires">Partenariats</Link></li>
            <li><a href="mailto:direction@novafriq.africa">direction@novafriq.africa</a></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Recevez nos actualités et l'avancée de nos produits.</p>
          <button type="button" className="newsletter-soon" onClick={() => showToast('Bientôt disponible')}>
            Bientôt disponible
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© {new Date().getFullYear()} NovafriQ Groupe SAS. Tous droits réservés. Sèmè-Podji, Bénin.</div>
        <div className="footer-legal">
          <button type="button" onClick={() => showToast('Page en cours de rédaction')}>Mentions légales</button>
          <button type="button" onClick={() => showToast('Page en cours de rédaction')}>Politique de confidentialité</button>
          <button type="button" onClick={() => showToast('Page en cours de rédaction')}>CGU</button>
          <a href="https://gextimo.novafriq.africa" target="_blank" rel="noreferrer">Gextimo</a>
        </div>
      </div>
    </footer>
  )
}
