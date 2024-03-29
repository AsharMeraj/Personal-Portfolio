'use client'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Layout } from 'lucide-react'


const Wrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        {children}
      </AnimatePresence>
    </Layout>
  )
}

Wrapper.displayName = "Wrapper"
export default Wrapper