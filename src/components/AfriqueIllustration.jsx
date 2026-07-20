import { useEffect, useRef } from 'react'
import './AfriqueIllustration.css'

const NODES = [
  { x: 210, y: 90, color: 'var(--or)' },
  { x: 300, y: 140, color: 'var(--or)' },
  { x: 340, y: 230, color: 'var(--or)' },
  { x: 260, y: 260, color: 'var(--or)' },
  { x: 180, y: 220, color: 'var(--or)' },
  { x: 150, y: 320, color: 'var(--or)' },
  { x: 240, y: 360, color: 'var(--or)' },
  { x: 320, y: 340, color: 'var(--or)' },
]

const LINKS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
  [3, 5], [5, 6], [6, 7], [7, 2], [4, 6],
]

// Amplitude/fréquence/phase propres à chaque nœud pour un mouvement organique (type Lissajous)
const NODE_MOTION = NODES.map((_, i) => ({
  ax: 6 + (i % 3) * 2.5,
  ay: 5 + (i % 4) * 2,
  fx: 0.35 + i * 0.09,
  fy: 0.28 + i * 0.11,
  phase: i * 1.7,
}))

export default function AfriqueIllustration() {
  const nodeRefs = useRef([])
  const lineRefs = useRef([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame
    const start = performance.now()

    const tick = (now) => {
      const t = (now - start) / 1000

      const positions = NODES.map((n, i) => {
        const m = NODE_MOTION[i]
        return {
          x: n.x + Math.sin(t * m.fx + m.phase) * m.ax,
          y: n.y + Math.cos(t * m.fy + m.phase) * m.ay,
        }
      })

      positions.forEach((p, i) => {
        const g = nodeRefs.current[i]
        if (g) g.setAttribute('transform', `translate(${p.x - NODES[i].x} ${p.y - NODES[i].y})`)
      })

      LINKS.forEach(([a, b], i) => {
        const line = lineRefs.current[i]
        if (line) {
          line.setAttribute('x1', positions[a].x)
          line.setAttribute('y1', positions[a].y)
          line.setAttribute('x2', positions[b].x)
          line.setAttribute('y2', positions[b].y)
        }
      })

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <svg className="afrique-illu" viewBox="0 0 480 480" fill="none" aria-hidden="true">
      <path
        className="afrique-shape"
        d="M220 40 C280 45 320 90 335 140 C350 190 380 210 360 260
           C345 300 350 340 310 380 C280 410 250 440 220 420
           C195 405 200 370 175 350 C140 325 110 330 100 290
           C90 250 130 230 140 190 C150 150 130 110 165 75
           C185 55 200 38 220 40 Z"
      />

      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          ref={(el) => (lineRefs.current[i] = el)}
          className="afrique-link"
          x1={NODES[a].x} y1={NODES[a].y}
          x2={NODES[b].x} y2={NODES[b].y}
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}

      {NODES.map((n, i) => (
        <g key={i} ref={(el) => (nodeRefs.current[i] = el)}>
          <circle
            className="afrique-pulse"
            cx={n.x} cy={n.y} r="6"
            style={{ stroke: n.color, animationDelay: `${i * 0.4}s` }}
          />
          <circle className="afrique-node" cx={n.x} cy={n.y} r="4" style={{ fill: n.color }} />
        </g>
      ))}
    </svg>
  )
}
