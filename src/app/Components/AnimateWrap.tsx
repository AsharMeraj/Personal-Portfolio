'use client'
import { AnimatePresence, motion } from 'framer-motion'



export const HomeAnimateWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            <motion.div
                key='Contact'
                className=''
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}>
                {children}
            </motion.div>
        </AnimatePresence>

    )
};
export const ContactAnimateWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            <motion.div
                key='Contact'
                className='overflow-y-hidden'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}>
                {children}
            </motion.div>
        </AnimatePresence>

    )
};

