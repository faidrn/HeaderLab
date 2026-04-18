import { useState, useEffect } from "react";
import ShowcaseLayout from "../Layouts/ShowcaseLayout";
import { SlidingHeader, InteractiveHeader, AnimatedHeader } from "../components/headers";
import { menuSlidingHeader, iconsSlidingHeader } from "../components/headers/SlidingHeader/slidingHeader.data";
import { categories, iconsInteractiveHeader, buttonInteractiveHeader } from "../components/headers/InteractiveHeader/interactiveHeader.data";
import { navItemsAnimatedHeader, buttonAnimatedHeader } from "../components/headers/AnimatedHeader/animatedHeader.data";


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
                className="p-4 border-b flex gap-4 bg-gray-100 dark:bg-gray-900 transition-colors"
            >
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 m-4 bg-black text-white dark:bg-white dark:text-black rounded"
                >
                    Toggle Dark Mode
                </button>

                <button
                    onClick={() => setActive("sliding")}
                    className="px-4 py-2 bg-black text-white rounded"
                >
                    Sliding
                </button>
                
                <button
                    onClick={() => setActive("interactive")}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Interactive
                </button>

                <button
                    onClick={() => setActive("animated")}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Animated
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