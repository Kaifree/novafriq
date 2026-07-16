import { useState } from 'react'
import { useToast } from './ToastContext'
import './ContactForm.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_FORMSPREE'

const EMPTY_FORM = { prenom: '', nom: '', email: '', objet: '', message: '' }

export default function ContactForm() {
  const showToast = useToast()
  const [form, setForm] = useState(EMPTY_FORM)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        showToast('Message envoyé — nous vous répondrons sous 48h.')
        setForm(EMPTY_FORM)
      } else {
        showToast("Échec de l'envoi. Réessayez ou écrivez-nous directement par email.")
      }
    } catch {
      showToast('Erreur réseau — vérifiez votre connexion et réessayez.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value={`NovafriQ — ${form.objet || 'Nouveau message'}`} readOnly />

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-prenom">Prénom</label>
          <input type="text" id="contact-prenom" name="prenom" placeholder="Votre prénom" value={form.prenom} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-nom">Nom</label>
          <input type="text" id="contact-nom" name="nom" placeholder="Votre nom" value={form.nom} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="contact-objet">Objet</label>
        <select id="contact-objet" name="objet" value={form.objet} onChange={handleChange} required>
          <option value="" disabled>Sélectionnez un objet</option>
          <option>Partenariat stratégique</option>
          <option>Investissement</option>
          <option>Recrutement / Candidature</option>
          <option>Presse & Médias</option>
          <option>Autre demande</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Décrivez votre projet, votre question ou votre opportunité..." value={form.message} onChange={handleChange} required />
      </div>

      <button className="btn-primary contact-submit" type="submit" disabled={sending}>
        <span>{sending ? 'Envoi en cours...' : 'Envoyer le message'}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  )
}
