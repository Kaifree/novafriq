import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useToast } from './ToastContext'
import './Footer.css'

export default function Footer() {
  const showToast = useToast()
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    showToast('Merci ! Vous êtes inscrit à notre newsletter.')
    setEmail('')
  }

  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="logo-mark">N</div>
            <div className="logo-text">
              <span className="logo-name">NovafriQ</span>
              <span className="logo-tagline">Groupe SAS</span>
            </div>
          </Link>
          <p>NovafriQ est un groupe technologique panafricain qui conçoit et déploie des plateformes numériques à fort impact pour l'Afrique.</p>
          <div className="footer-socials">
            <button type="button" className="social-btn" onClick={() => showToast('Lien réseau social à configurer')} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </button>
            <button type="button" className="social-btn" onClick={() => showToast('Lien réseau social à configurer')} aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </button>
            <button type="button" className="social-btn" onClick={() => showToast('Lien réseau social à configurer')} aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </button>
            <button type="button" className="social-btn" onClick={() => showToast('Lien réseau social à configurer')} aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h4>Le groupe</h4>
          <ul>
            <li><Link to="/vision">Notre vision</Link></li>
            <li><Link to="/produits">Nos produits</Link></li>
            <li><Link to="/fondateur">Le fondateur</Link></li>
            <li><Link to="/equipe">Notre équipe</Link></li>
            <li><Link to="/partenaires">Partenaires</Link></li>
            <li><Link to="/actualites">Actualités</Link></li>
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
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Adresse email"
            />
            <button type="submit" aria-label="S'inscrire">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2024 NovafriQ Groupe SAS. Tous droits réservés. Sèmè-Podji, Bénin.</div>
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
