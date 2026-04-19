import { useState, useEffect } from "react";
import ShowcaseLayout from "../Layouts/ShowcaseLayout";
import { SlidingHeader, InteractiveHeader, AnimatedHeader } from "../components/headers";
import { menuSlidingHeader, iconsSlidingHeader } from "../components/headers/SlidingHeader/slidingHeader.data";
import { categories, iconsInteractiveHeader, buttonInteractiveHeader } from "../components/headers/InteractiveHeader/interactiveHeader.data";
import { navItemsAnimatedHeader, buttonAnimatedHeader } from "../components/headers/AnimatedHeader/animatedHeader.data";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";


const HeaderShowcase = () => {
    const [active, setActive] = useState("sliding");

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

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
                    <option value="sliding">Sliding</option>
                    <option value="interactive">Interactive</option>
                    <option value="animated">Animated</option>
                </select>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-lg bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors"
                >
                    <motion.div
                        key={darkMode ? "sun" : "moon"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.div>
                </button>
            </div>

            {active === "sliding" && (
                <SlidingHeader 
                    title="BrandLogo"
                    menuItems={menuSlidingHeader}
                    icons={iconsSlidingHeader}
                />
            )}
            {active === "interactive" && (
                <InteractiveHeader 
                    title="TechHub"
                    categories={categories}
                    icons={iconsInteractiveHeader}
                    button={buttonInteractiveHeader}
                    darkMode={darkMode}
                />
            )}
            {active === "animated" && (
                <AnimatedHeader 
                    title="ZapHub"
                    subtitle="Power Your Connections"
                    navItems={navItemsAnimatedHeader}
                    button={buttonAnimatedHeader}
                />
            )}


            <div
                className="p-10 text-center text-gray-500  dark:bg-gray-900 dark:text-white transition-colors"
            >
                Example content to display the header
            </div>
        </ShowcaseLayout>
    );
};

export default HeaderShowcase;