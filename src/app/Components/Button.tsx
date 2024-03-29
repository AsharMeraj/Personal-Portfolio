import React from 'react'
type PropType = {
    name: string
}

export default function Button(props: PropType) {
  return (
    <h1 className='cursor-pointer px-8 py-2 border-2 border-[--Primary-Color] dim-light text-[--Primary-Color] w-fit h-fit hover:bg-[--Primary-Color] hover:text-white rounded-sm tracking-wide duration-300 font-bold shadow-lg shadow-[rgb(26,26,26)] text-center'>{props.name}</h1>
  )
}
