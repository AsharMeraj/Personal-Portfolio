import React from 'react'

const Button = ({children}:{children: React.ReactNode}) => {
    return (
        <button className="relative h-16 px-12 w-fit border border-transparent text-white rounded-md transition-all duration-500 group whitespace-nowrap">
            {children}
            <span className="absolute top-0 left-0 w-[18%] h-[50%] border-t-4 border-l-4 border-primary transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 w-[18%] h-[50%] border-b-4 border-r-4 border-primary transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
        </button>
    )
}

export default Button