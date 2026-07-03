import { createContext, useCallback, useContext, useRef, useState } from 'react'
import './Toast.css'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)

  const showToast = useCallback((msg) => {
    setMessage(msg)
    setVisible(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setVisible(false), 3500)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className={`toast${visible ? ' show' : ''}`}>
        <span className="toast-icon">◆</span>
        <span>{message}</span>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast doit être utilisé dans un ToastProvider')
  return ctx
}
