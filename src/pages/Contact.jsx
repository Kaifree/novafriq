import ContactForm from '../components/ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <div id="page-contact">
      <section className="section section-dark contact-section">
        <div className="container">
          <div className="breadcrumb contact-breadcrumb">Accueil › <span className="contact-breadcrumb-current">Contact</span></div>

          <div className="contact-heading">
            <div className="section-label">Écrivez-nous</div>
            <h1 className="contact-title">Nous sommes à votre écoute.</h1>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              <h3>Une question, une opportunité, un projet ?</h3>
              <p>Que vous soyez investisseur, partenaire potentiel, candidat ou simplement curieux de ce que nous construisons — nous répondons à chaque message.</p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div className="contact-detail-text">
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">direction@novafriq.africa</div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <div className="contact-detail-text">
                    <div className="contact-detail-label">Site web</div>
                    <div className="contact-detail-value">www.novafriq.africa</div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className="contact-detail-text">
                    <div className="contact-detail-label">Siège social</div>
                    <div className="contact-detail-value">Sèmè-Podji, Agblangandan, République du Bénin</div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
