import { motion } from 'framer-motion';

export const MenuButton = ({ isOpen, onClick }) => {
    return (
        <button
            onClick= { onClick }
            className="relative w-12 h-12 rounded-full bg-auto hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            aria-label="Toggle Menu"
        >
            <div className="w-6 h-6 relative">
                <motion.span
                    animate={isOpen ? {rotate: 45, y: 8} : {rotate: 0, y: 0}}
                    transition={{duration: 0.3}}
                    className="absolute w-6 h-0.5 bg-white top-0"
                />
                <motion.span
                    animate={isOpen ? {opacity: 0} : {opacity: 1}}
                    transition={{duration: 0.3}}
                    className="absolute w-6 h-0.5 bg-white top-2"
                />
                <motion.span
                    animate={isOpen ? {rotate: -45, y: -8} : {rotate: 0, y: 0}}
                    transition={{duration: 0.3}}
                    className="absolute w-6 h-0.5 bg-white top-4"
                />
            </div>
        </button>
    )
}