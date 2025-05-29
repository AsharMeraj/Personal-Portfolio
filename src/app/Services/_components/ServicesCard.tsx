import { IconType } from 'react-icons/lib';


interface PropType {
    logo: IconType
    head: string
    para: string
}

export const ServicesCard = (props: PropType) => {
    return (
        <div className='flex gap-5 flex-col rotateDiv'>
            <div className='relative w-fit'>
                <div className='border border-primary p-8 md:p-10 w-fit rotateBox duration-500'>
                </div>
                <props.logo color='white' size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <h2 className='text-white font-semibold text-xl md:text-2xl font-mono'>{props.head}</h2>
            <p className='font-sans text-sm text-gray-400 max-w-72'>{props.para}</p>
        </div>
    )
}