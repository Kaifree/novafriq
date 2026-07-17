import Reveal from './Reveal'
import PlaceholderImg from './PlaceholderImg'
import { PersonIcon } from './icons'
import './MembreCard.css'

export default function MembreCard({ nom, poste, desc, badge, index = 0 }) {
  return (
    <Reveal index={index} className="membre-card">
      <div className="membre-photo-wrap">
        <PlaceholderImg icon={<PersonIcon />} label="Photo à venir" dim="Portrait — 600 × 800 px" />
        <div className="membre-badge">{badge}</div>
      </div>
      <div className="membre-info">
        <div className="membre-nom">{nom}</div>
        <div className="membre-poste">{poste}</div>
        <div className="membre-desc">{desc}</div>
      </div>
    </Reveal>
  )
}
