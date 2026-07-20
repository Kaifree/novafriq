import { useEffect } from 'react'

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    const meta = document.querySelector('meta[name="description"]')
    const prevDescription = meta?.getAttribute('content')
    if (meta && description) meta.setAttribute('content', description)

    return () => {
      document.title = prevTitle
      if (meta && prevDescription) meta.setAttribute('content', prevDescription)
    }
  }, [title, description])
}
