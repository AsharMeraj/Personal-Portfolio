'use client'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { useLoader } from './LoaderProvider'

type CustomLinkProps = {
  href: Url
  children: React.ReactNode
} & Omit<ComponentProps<typeof Link>, 'href' | 'children'>

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
   const {triggerLoader} = useLoader()
  return (
    <Link href={href} {...props} onClick={() => triggerLoader()}>
        {children}
    </Link>
  )
}

export default CustomLink