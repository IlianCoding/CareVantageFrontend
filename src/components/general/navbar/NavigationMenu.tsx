import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const NavigationMenu = ({ isOpen, onClose }) => {
    const navLinks = [
        {
            title: 'Home',
            path: '/',
            description: 'Return to the main page'
        },
        {
            title: 'About',
            path: '/about',
            description: 'Learn more about our company and mission'
        },
        {
            title: 'Services',
            path: '/services',
            description: 'Explore our range of professional services'
        },
        {
            title: 'Contact',
            path: '/contact',
            description: 'Get in touch with our team'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black z-40"
                >
                    <div className="container mx-auto px-8 py-24">
                        <div className="grid gap-8">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={link.path}
                                        className="group block"
                                        onClick={onClose}
                                    >
                                        <h2 className="text-4xl font-bold text-white mb-2">
                                            {link.title}
                                        </h2>
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            whileHover={{ opacity: 1, height: 'auto' }}
                                            className="text-gray-400"
                                        >
                                            {link.description}
                                        </motion.p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};