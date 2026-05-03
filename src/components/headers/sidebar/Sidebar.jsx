import { useState } from "react";
import { Menu, X } from "lucide-react";
import { headerColors } from "../../../styles/headerTokens";
import { useTheme } from "../../../theme/ThemeProvider";
import { motion, AnimatePresence } from 'motion/react';


const Sidebar = ({
    title = "My App",
    subtitle = "Welcome back!",
    menuItems = [],
    button = [],
    color = "white",
}) => {
    const { theme } = useTheme();
    const c = headerColors[color];

    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            x: isMobile ? -280 : -200,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24
            }
        },
        closed: {
            opacity: 0,
            x: -20
        }
    };


    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed ${
                    isOpen && !isMobile ? 'left-64' : isMobile ? 'left-auto right-4' : 'left-4'
                    } top-4 z-50 p-2 rounded-lg ${
                        darkMode
                            ? 'bg-gray-800 text-white hover:bg-gray-700'
                            : 'bg-white text-gray-900 hover:bg-gray-100'
                    } shadow-lg transition-all duration-300`}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
            </motion.button>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                className={`fixed top-0 left-0 h-screen w-64 ${
                    darkMode 
                        ? 'bg-gray-900 border-gray-800' 
                        : 'bg-white border-gray-200'
                    } border-r shadow-xl`}
            >
                <div
                    className="flex flex-col h-full"
                >
                    {/* Header */}
                    <motion.div
                        className="p-6 border-b border-current/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h1
                            className={`text-2xl font-bold ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                            {title}
                        </h1>
                        <p
                            className={`text-sm mt-1 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                        >
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <nav
                        className="flex-1 p-4 overflow-y-auto"
                    >
                        <motion.ul
                            className="space-y-2"
                            variants={{
                                open: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.1
                                    }
                                }, 
                                closed: {
                                    transition: {
                                        staggerChildren: 0.02,
                                        staggerDirection: -1
                                    }
                                }
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    variants={itemVariants}
                                >
                                    <motion.a
                                        href={item.href}
                                        whileHover={{ scale: 1.02, x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                            darkMode 
                                                ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        } ${index === 0 ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900') : ''}`}
                                    >
                                        <item.icon size={20} />
                                        <span
                                            className="font-medium"
                                        >
                                            {item.label}
                                        </span>
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>

                    {/* Footer with Dark Mode Toggle */}
                    <motion.div
                    >
                    </motion.div>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;