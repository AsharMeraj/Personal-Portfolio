'use client'

import { createContext, useContext, useState } from 'react'

type LoaderContextType = {
  show: boolean
  triggerLoader: () => void
}

const LoaderContext = createContext<LoaderContextType>({
  show: false,
  triggerLoader: () => {},
})

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)

  const triggerLoader = () => {
    setShow(true)
    setTimeout(() => setShow(false), 1500) // Reset after 2.3s
  }

  return (
    <LoaderContext.Provider value={{ show, triggerLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)
