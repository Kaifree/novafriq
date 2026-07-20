import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <Header />
      <main id="main-content" className="page" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
