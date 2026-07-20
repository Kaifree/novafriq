import './PosteItem.css'

export default function PosteItem({ titre, lieu, type, onClick }) {
  return (
    <div className="poste-item" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
      <div className="poste-info">
        <div className="poste-titre">{titre}</div>
        <div className="poste-meta">
          <span className="poste-tag">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            {lieu}
          </span>
          <span className="poste-tag">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            {type}
          </span>
        </div>
      </div>
      <div className="poste-arrow">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </div>
    </div>
  )
}
