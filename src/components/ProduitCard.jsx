import Reveal from './Reveal'
import { ExternalLinkIcon } from './icons'
import './ProduitCard.css'

export default function ProduitCard({ href, active, bannerClassName, banner, status, statusLabel, tagline, name, desc, linkLabel, index = 0 }) {
  const Tag = href ? 'a' : 'div'
  const tagProps = href ? { href, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <Reveal as={Tag} index={index} className={`produit-card${active ? ' active-product' : ''}`} {...tagProps}>
      <div className={`produit-banner${bannerClassName ? ` ${bannerClassName}` : ''}`}>
        <span className={`produit-status status-${status}`}>{statusLabel}</span>
        {banner}
      </div>
      <div className="produit-body">
        <div className="produit-tagline">{tagline}</div>
        <div className="produit-name">{name}</div>
        <p className="produit-desc">{desc}</p>
        {href ? (
          <span className="produit-link">
            {linkLabel}
            <ExternalLinkIcon />
          </span>
        ) : (
          <span className="produit-link produit-link-disabled">{linkLabel}</span>
        )}
      </div>
    </Reveal>
  )
}
