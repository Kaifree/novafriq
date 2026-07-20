import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/vision', label: 'Vision' },
  { to: '/produits', label: 'Nos Produits' },
  { to: '/equipe', label: 'Notre équipe' },
  { to: '/carrieres', label: 'Carrières' },
  { to: '/partenaires', label: 'Partenaires' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="logo-wrap" onClick={closeMenu}>
          <img src="/logo/novafriq-logo-blanc.png" alt="NovafriQ Groupe SAS" className="logo-img" />
        </Link>

        <nav id="main-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta">
            Nous contacter
          </NavLink>
        </nav>

        <button
          type="button"
          className="hamburger"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-menu">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="mobile-cta" onClick={closeMenu}>
            Nous contacter
          </NavLink>
        </div>
      )}
    </>
  )
}
