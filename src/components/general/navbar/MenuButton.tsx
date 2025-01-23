import { motion } from 'framer-motion';

export const MenuButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <button
            onClick= { onClick }
            className="relative w-14 h-14 rounded-full bg-auto hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            aria-label="Toggle Menu"
        >
            <div className="w-6 h-6 relative">
                <motion.span
                    animate={isOpen ? {rotate: 45, y: 8} : {rotate: 0, y: 0}}
                    transition={{duration: 0.3}}
                    className="absolute w-8 h-1 top-0"
                    style={{backgroundColor: '#FEF9F3'}}
                />
                <motion.span
                    animate={isOpen ? {opacity: 0} : {opacity: 1}}
                    transition={{duration: 0.3}}
                    className="absolute w-8 h-1 top-2"
                    style={{backgroundColor: '#FEF9F3'}}
                />
                <motion.span
                    animate={isOpen ? {rotate: -45, y: -8} : {rotate: 0, y: 0}}
                    transition={{duration: 0.3}}
                    className="absolute w-8 h-1 top-4"
                    style={{backgroundColor: '#FEF9F3'}}
                />
            </div>
        </button>
    )
}