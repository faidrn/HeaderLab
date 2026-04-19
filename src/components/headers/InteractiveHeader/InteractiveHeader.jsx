import {useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { headerColors } from "../../../styles/headerTokens";
import { useTheme } from "../../../theme/ThemeProvider";


const InteractiveHeader = ({
    title = "TechHub",
    categories = [],
    icons = [],
    button = [],
    color = "slate",
}) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { scrollY } = useScroll();
    const { theme } = useTheme();

    const MotionLink = motion(Link);

    const c = headerColors[color];

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        theme === "dark"
            ? [c.from.dark, c.to.dark]
            : [c.from.light, c.to.light]
    );

    const logoColor = `${c.cyan.from} ${c.cyan.to}`;
    const dropdownColor = `${c.dropdown.light} ${c.dropdown.dark}`;
    
    const gradientButton =
      theme === "dark"
        ? `${c.button.from.dark} ${c.button.to.dark}`
        : `${c.button.from.light} ${c.button.to.light}`;

    const hoverButton =
      theme === "dark"
        ? `${c.button.hover.dark.from} ${c.button.hover.dark.to}`
        : `${c.button.hover.light.from} ${c.button.hover.light.to}`;

    

    const headerHeight = useTransform(
        scrollY,
        [0, 100],
        [80, 64]
    );


    return (
        <motion.header
            style={{ backgroundColor, height: headerHeight }}
            className="w-full sticky top-0 z-50 backdrop-blur-md border-b border-white/10"
        >
            <div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
            >
                <div 
                    className="flex items-center justify-between h-full"
                >
                    {/* Logo with Wave Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity, 
                                ease: "easeInOut"
                            }}
                            className={`w-10 h-10 bg-linear-to-br ${logoColor} rounded-lg flex items-center justify-center`}
                        >
                            <span className="text-white text-xl">◆</span>
                        </motion.div>
                        <span className="text-white text-xl hidden sm:block">{title}</span>
                    </motion.div>

                    {/* Desktop Categories */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {categories.map((category, index) => (
                            <div 
                                key={category.name} 
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(category.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors py-2"
                                >
                                    {category.name}
                                    <motion.div
                                        animate={{ rotate: activeDropdown === category.name ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={16} />
                                    </motion.div>
                                </motion.button>
                                
                                {/* Dropdown */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ 
                                        opacity: activeDropdown === category.name ? 1 : 0,
                                        y: activeDropdown === category.name ? 0 : -10,
                                        pointerEvents: activeDropdown === category.name ? "auto" : "none" 
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className={`absolute top-full left-0 mt-2 w-48 ${dropdownColor} rounded-lg shadow-xl border border-white/10 overflow-hidden transition-colors`}
                                >
                                    {category.items.map((item, i) => (
                                        <MotionLink
                                            key={item}
                                            to="#"
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ 
                                                x: activeDropdown === category.name ? 0 : -10,
                                                opacity: activeDropdown === category.name ? 1 : 0
                                             }}
                                            transition={{ delay: i * 0.05 }}
                                            className={`block px-4 py-3 text-white/80 ${c.hoverBackground} ${c.hoverText} transition-colors`}
                                        >
                                            {item}
                                        </MotionLink>
                                    ))}
                                </motion.div>
                            </div>
                        ))}
                    </nav>

                    {/* Right Icons */}
                    <div 
                        className="flex items-center gap-2 sm:gap-3"
                    >
                        {icons.map(({icon: Icon, onClick}, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClick}
                                className={`p-2 sm:p-2.5 ${c.icon.background} ${c.icon.hover} ${c.icon.color} rounded-lg transition-colors`}
                            >
                                <Icon size={20} />
                            </motion.button>
                        ))}
                            
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={button.onClick}
                            className={`hidden sm:block ml-2 px-4 py-2 bg-linear-to-r ${gradientButton} ${c.button.text} ${hoverButton} rounded-lg transition-all`}
                        >
                            {button.text}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default InteractiveHeader;