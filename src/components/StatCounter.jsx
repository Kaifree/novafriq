import useInViewport from '../hooks/useInViewport'
import useCountUp from '../hooks/useCountUp'

export default function StatCounter({ value, label, suffix = '' }) {
  const { ref, inView } = useInViewport({ threshold: 0.4 })
  const count = useCountUp(value, { startWhen: inView })

  return (
    <div className="hero-stat" ref={ref}>
      <span className="hero-stat-num">{count}{suffix}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  )
}
