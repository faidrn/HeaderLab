import { useState } from "react";
import ShowcaseLayout from "../Layouts/ShowcaseLayout";
import { SlidingHeader, InteractiveHeader, AnimatedHeader } from "../components/headers";
import { menuSlidingHeader, iconsSlidingHeader } from "../components/headers/SlidingHeader/slidingHeader.data";
import { categories, iconsInteractiveHeader, buttonInteractiveHeader } from "../components/headers/InteractiveHeader/interactiveHeader.data";
import { navItemsAnimatedHeader, buttonAnimatedHeader } from "../components/headers/AnimatedHeader/animatedHeader.data";


const HeaderShowcase = () => {
    const [active, setActive] = useState("sliding");


    return (
        <ShowcaseLayout>
            <div
                className="p-4 border-b flex gap-4"
            >
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
                className="p-10 text-center text-gray-500"
            >
                Example content to display the header
            </div>
        </ShowcaseLayout>
    );
};

export default HeaderShowcase;