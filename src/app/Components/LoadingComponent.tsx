'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useLoader } from './LoaderProvider'

export default function LoadingComponent() {
  const { show } = useLoader()
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (show) {
      // Instantly show loader with full opacity
      setVisible(true)
      setFadeOut(false)

      const fadeTimer = setTimeout(() => {
        setFadeOut(true) // Start fade out
      }, 1000)

      const removeTimer = setTimeout(() => {
        setVisible(false) // Remove from DOM after fade-out
      }, 1500)

      return () => {
        clearTimeout(fadeTimer)
        clearTimeout(removeTimer)
      }
    }
  }, [show])

  if (!visible) return null

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-backgroundColorDark transition-opacity duration-500',
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      <div className="w-20 h-20 border-[5px] border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
