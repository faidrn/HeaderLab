import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap } from "lucide-react";
import { headerColors } from "../../../styles/headerTokens";
import { useTheme } from "../../../theme/ThemeProvider";


const GlassHeader = ({ 
    title = "NovaMake",
    navItems = [],
    button = [],
    color = "glassPurple",
}) => {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useTheme();
    const c = headerColors[color];

    useEffect(() => {
        const root = document.documentElement;
        dark ? root.classList.add("dark") : root.classList.remove("dark");
    }, [dark]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const background =
      theme === "dark"
        ? `${c.background.dark}`
        : `${c.background.light}`;

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                ? "mx-4 mt-3 rounded-2xl shadow-2xl"
                : "mx-0 mt-0 rounded-none shadow-none"
            }`}
        >
            {/* Glass layer */}
            <div
                className={`relative overflow-hidden transition-all duration-500 ${
                    scrolled ? "rounded-2xl" : ""
                } backdrop-blur-xl border ${c.border.light} ${c.border.dark} ${background} ${
                    scrolled 
                        ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)]" 
                        : ""

                }`}
            >
                {/* Gradient shimmer on top */}
                <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${c.viaGradient.light} ${c.viaGradient.dark} to-transparent`} />

                <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 shrink-0"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className={`absolute inset-0 rounded-lg bg-linear-to-br ${c.logoColor.from} ${c.logoColor.to} opacity-70 blur-[6px]`}
                            />
                            <div className={`relative flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br ${c.logoColor.from} ${c.logoColor.to}`}>
                                <Zap className={`w-4 h-4 ${c.textLogo}`} />
                            </div>
                        </div>
                        <span className={`text-lg tracking-tight bg-linear-to-r ${c.gradientTitle.light.from} ${c.gradientTitle.light.to} ${c.gradientTitle.dark.from} ${c.gradientTitle.dark.to} bg-clip-text text-transparent select-none`}>
                            {title}
                        </span>
                    </motion.a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i + 0.3, duration: 0.4 }}
                                whileHover={{ y: -2 }}
                                className="relative px-4 py-1.5 text-sm text-foreground/70 dark:text-foreground/60 hover:text-foreground dark:hover:text-foreground transition-colors duration-200 group"
                            >
                                {link.label}
                                <span className={`absolute inset-x-3 bottom-0 h-px bg-linear-to-r ${c.gradientDesktopNav.from} ${c.gradientDesktopNav.to} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`} />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">

                        {/* CTA Button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={button.onClick}
                            className={`hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm ${c.button.text} bg-linear-to-r ${c.button.from} ${c.button.to} shadow-lg ${c.button.shadow} ${c.button.hoverShadow} transition-shadow duration-300`}
                        >
                            {button.text}
                        </motion.a>

                        {/* Mobile menu button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-xl border ${c.mobileButton.border.light} ${c.mobileButton.border.dark} ${c.mobileButton.background.light} ${c.mobileButton.background.dark} text-foreground/70 hover:text-foreground transition-colors duration-200`}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-4 h-4" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-4 h-4" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className={`md:hidden overflow-hidden border-t ${c.border.light} ${c.border.dark}`}
                        >
                            <div className="px-5 py-4 flex flex-col gap-1">
                                {navItems.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        initial={{ x: -16, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.06, duration: 0.3 }}
                                        onClick={() => setMenuOpen(false)}
                                        className={`px-3 py-2.5 rounded-xl text-sm text-foreground/70 dark:text-foreground/60 hover:text-foreground dark:hover:text-foreground ${c.mobileMenu.hover.light} ${c.mobileMenu.hover.dark} transition-all duration-200`}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#"
                                    initial={{ x: -16, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: navItems.length * 0.06, duration: 0.3 }}
                                    onClick={button.onClick}
                                    className={`mt-2 flex items-center justify-center py-2.5 rounded-xl text-sm ${c.button.text} bg-linear-to-r ${c.button.from} ${c.button.to}`}
                                >
                                    {button.text}
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom shimmer */}
                <div className={`absolute inset-x-0 bottom-0 h-px bg-linear-to-r ${c.bottomShimmer.from} ${c.bottomShimmer.via.light} ${c.bottomShimmer.via.dark} ${c.bottomShimmer.to}`} />
            </div>
        </motion.header>
    );
};

export default GlassHeader;