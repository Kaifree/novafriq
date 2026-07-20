import useInViewport from '../hooks/useInViewport'
import { useToast } from './ToastContext'
import './PoleCard.css'

export default function PoleCard({ name, color, icon, items, index = 0 }) {
  const { ref, inView } = useInViewport()
  const showToast = useToast()

  return (
    <div
      className={`pole-card reveal${inView ? ' in-view' : ''}`}
      ref={ref}
      style={{ '--pole-color': color, animationDelay: `${index * 0.1}s` }}
    >
      <div className="pole-icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
      </div>
      <div className="pole-name">{name}</div>
      <ul className="pole-items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button type="button" className="pole-more" onClick={() => showToast('Détails complets à venir')}>
        En savoir plus
      </button>
    </div>
  )
}
