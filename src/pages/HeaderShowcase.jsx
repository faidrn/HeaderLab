import { useState, useEffect } from "react";
import ShowcaseLayout from "../Layouts/ShowcaseLayout";
import { SlidingHeader, InteractiveHeader, AnimatedHeader, SimpleHeader, GlassHeader } from "../components/headers";
import { menuSlidingHeader, iconsSlidingHeader } from "../components/headers/SlidingHeader/slidingHeader.data";
import { categories, iconsInteractiveHeader, buttonInteractiveHeader } from "../components/headers/InteractiveHeader/interactiveHeader.data";
import { navItemsAnimatedHeader, buttonAnimatedHeader } from "../components/headers/AnimatedHeader/animatedHeader.data";
import { menusSimpleHeader, buttonSimpleHeader } from "../components/headers/SimpleHeader/simpleHeader.data";
import { navLinks, buttonGlassHeader } from "../components/headers/GlassHeader/glassHeader.data";
//import { menuItems, iconsSidebar, buttonUser } from "../components/headers/Sidebar/sidebar.data";
import { useTheme } from "../theme/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

const HeaderShowcase = () => {
    const [active, setActive] = useState("simple");
    const { theme, toggleTheme } = useTheme();

    return (
        <ShowcaseLayout>
            <div
                className="p-4 border-b flex justify-between items-center gap-4 bg-gray-100 dark:bg-gray-900 transition-colors"
            >
                <select
                    value={active}
                    onChange={(e) => setActive(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-400 bg-white text-black dark:bg-gray-800 dark:text-white"
                >
                    <option value="simple">Simple</option>
                    <option value="sliding">Sliding</option>
                    <option value="interactive">Interactive</option>
                    <option value="animated">Animated</option>
                    <option value="glass">Glass</option>
                </select>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors"
                >
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                         {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.div>
                </button>
            </div>

            {active === "sliding" && (
                <SlidingHeader 
                    title="BrandLogo"
                    menuItems={menuSlidingHeader}
                    icons={iconsSlidingHeader}
                    color="purple"
                />
            )}
            {active === "interactive" && (
                <InteractiveHeader 
                    title="TechHub"
                    categories={categories}
                    icons={iconsInteractiveHeader}
                    button={buttonInteractiveHeader}
                    color="slate"
                />
            )}
            {active === "animated" && (
                <AnimatedHeader 
                    title="ZapHub"
                    subtitle="Power Your Connections"
                    navItems={navItemsAnimatedHeader}
                    button={buttonAnimatedHeader}
                    color="orange"
                />
            )}
            {active === "simple" && (
                <SimpleHeader 
                    title="My Logo"
                    menuItems={menusSimpleHeader}
                    button={buttonSimpleHeader}
                    color="white"
                />
            )}

            {active === "glass" && (
                <GlassHeader 
                    title="NovaMake"
                    navItems={navLinks}
                    button={buttonGlassHeader}
                    color="glassPurple"
                />
            )}

            {/*{active === "sidebar" && (
                <Sidebar 
                    title="My App"
                    subtitle="Welcome back!"
                    menuItems={menuItems}
                    icons={iconsSidebar}
                    button={buttonUser}
                    color="white"
                />
            )}*/}

            <div
                className="p-10 text-center text-gray-500  dark:bg-gray-900 dark:text-white transition-colors"
            >
                Example content to display the header
            </div>
        </ShowcaseLayout>
    );
};

export default HeaderShowcase;