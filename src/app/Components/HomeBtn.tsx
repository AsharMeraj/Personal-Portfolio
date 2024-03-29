import React from 'react'
import {Link} from 'react-scroll'

type PropType = {
    name: string
    to: string
}


function HomeBtn(props: PropType) {
    return (
        <div>
            <Link to={props.to} duration={800} href='/about' smooth={true} className='names tracking-wider text-white cursor-pointer text-[12px] hover:text-[--Secondary-Color] duration-300'>
                <h2>{props.name}</h2>
            </Link>
        </div>

    )
}

export default HomeBtn