import React from 'react'
import Button from '../Components/Button'
import Link from 'next/link'

function Contact() {
  return (
    <div>
        <Link href="/Contact" className='max-[840px]:hidden'>
            <Button name='Contact'></Button>
        </Link>
    </div>
    
  )
}

export default Contact