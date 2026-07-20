import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastProvider } from './components/ToastContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Produits from './pages/Produits'
import Fondateur from './pages/Fondateur'
import Equipe from './pages/Equipe'
import Carrieres from './pages/Carrieres'
import Partenaires from './pages/Partenaires'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Actualites from './pages/Actualites'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vision" element={<Vision />} />
            <Route path="produits" element={<Produits />} />
            <Route path="fondateur" element={<Fondateur />} />
            <Route path="equipe" element={<Equipe />} />
            <Route path="carrieres" element={<Carrieres />} />
            <Route path="partenaires" element={<Partenaires />} />
            <Route path="faq" element={<Faq />} />
            <Route path="actualites" element={<Actualites />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
