import { motion } from "motion/react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";


const SlidingHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Home", "Products", "Services", "About", "Contact"];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div
                            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center"
                        >
                            <span className="text-purple-600 text-lg md:text-xl">✦</span>
                        </div>
                        <span className="text-xl md:text-2xl">BrandLogo</span>
                    </motion.div>

                    {/* Navigation */}
                    <nav 
                        className="hidden md:flex items-center gap-8"
                    >
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1, color: "#fbbf24" }}
                                className="hover:text-amber-300 transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div
                        className="hidden md:flex items-center gap-4"
                    >
                        {[Search, ShoppingCart, User].map((Icon, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <Icon size={20} />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.nav
                        initial={false}
                        animate={{
                            height: isMenuOpen ? "auto" : 0,
                            opacity: isMenuOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}                    
                        className="md:hidden overflow-hidden"
                    >
                        <div
                            className="py-4 space-y-3"
                        >
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="block py-2 px-4 hover:bg-white/20 rounded-lg"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.nav>
                </div>
            </div>
        </motion.header>
    );
};

export default SlidingHeader;