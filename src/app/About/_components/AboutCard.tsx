import { IconType } from 'react-icons/lib'

interface PropType {
    logo: IconType
    head: string
    para: string
}

export const AboutCard = (props: PropType) => {
    return (
        <div className=" relative p-8 border border-primary hover:bg-primary duration-300 hoverDiv">
            <span className="absolute left-1/2 -translate-x-1/2 -top-[13%] bg-backgroundColorLight border border-primary rounded-full p-4"><props.logo color="white" size={35} /></span>
            <div className="max-w-72 m-auto">
                <h2 className="text-white font-semibold text-xl md:text-2xl font-mono mt-4">{props.head}</h2>
                <p className="text-gray-500 paragraph duration-300 font-sans text-sm mt-4">{props.para}</p>
            </div>
        </div>
    )
}