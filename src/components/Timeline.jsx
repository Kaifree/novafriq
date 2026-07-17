import useInViewport from '../hooks/useInViewport'
import './Timeline.css'

function TimelineItem({ marker, title, desc, index }) {
  const { ref, inView } = useInViewport()

  return (
    <div
      className={`timeline-item reveal${inView ? ' in-view' : ''}`}
      ref={ref}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="timeline-marker">{marker}</div>
      <div className="timeline-body">
        <div className="timeline-title">{title}</div>
        {desc && <p className="timeline-desc">{desc}</p>}
      </div>
    </div>
  )
}

export default function Timeline({ orientation = 'vertical', items }) {
  return (
    <div className={`timeline timeline-${orientation}`}>
      <div className="timeline-rail" aria-hidden="true"></div>
      {items.map((item, i) => (
        <TimelineItem key={item.title} index={i} {...item} />
      ))}
    </div>
  )
}
