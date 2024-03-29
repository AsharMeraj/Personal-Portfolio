'use client'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'



const AnimateWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence  mode='wait'>
            <motion.div
                key='Contact'
                className='overflow-y-hidden'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: easeInOut, duration: 0.5 }}>
                {children}
            </motion.div>
        </AnimatePresence>

    )
};


export default AnimateWrap