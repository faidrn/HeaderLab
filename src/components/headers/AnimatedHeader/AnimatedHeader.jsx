import { motion, useAnimationControls } from "motion/react";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";


const AnimatedHeader = ({ 
    title = "ZapHub",
    subtitle = "Power Your Connections",
    navItems = [],
    button = [],
}) => {
    const controls = useAnimationControls();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-slate-900 text-white shadow-2xl relative overflow-hidden"
        >
            {/* Animated Background Particles */}
            <div
                className="absolute inset-0 overflow-hidden opacity-30"
            >
                {[...Array(20)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{ 
                            x: [
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                            ], 
                            y: [
                                Math.random() * 100,,
                                Math.random() * 100,
                            ],
                            opacity: [0, 1, 0],
                        }}
                        transition={{ 
                            duration: Math.random() * 5 + 3, 
                            repeat: Infinity, 
                            ease: "linear" 

                        }}
                        style={{
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                    />
                ))}
            </div>

            <div
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div
                    className="flex flex-col sm:flex-row items-center justify-betwee py-4 gap-4"
                >
                    {/* Logo with Pulse Effect */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                "0 0 0 0 rgba(234, 179, 8, 0.7)",
                                "0 0 0 20px rgba(234, 179, 8, 0)",
                                "0 0 0 0 rgba(234, 179, 8, 0)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="relative w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center"
                        >
                            <Zap className="text-white" size={24} />
                        </motion.div>
                        <div
                            className="flex flex-col"
                        >
                            <span className="text-2xl">{title}</span>
                            <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xs text-yellow-400"
                            >
                                {subtitle}
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Navigation with Stagger Effect */}
                    <nav 
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                    >
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.3 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all overflow-hidden"
                                >
                                    {/* Animated Gradient Background */}
                                    <motion.div
                                        className={`absolute inset-0 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="relative z-10"
                                    >
                                        <Icon size={18} />
                                    </motion.div>

                                    <span className="relative z-10 text-sm hidden sm:inline">
                                        {item.label}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </nav>

                    {/* CTA Button with Shimmer Effect */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={button.onClick}
                        className="relative px-6 py-2.5 bg-linear-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                            <span className="relative z-10">
                                {button.text}
                            </span>
                    </motion.button>
                </div>
            </div>

            
        </motion.header>

    );
};

export default AnimatedHeader;