import { useState } from "react";
import ShowcaseLayout from "../Layouts/ShowcaseLayout";
import { SlidingHeader, InteractiveHeader, AnimatedHeader } from "../components/headers";
import { 
    Search, 
    ShoppingCart, 
    User, 
    Bell, 
    Mail, 
    Settings, 
    Home, 
    Briefcase, 
    Book, 
    MessageCircle, 
    Heart
 } from "lucide-react";



const HeaderShowcase = () => {
    const [active, setActive] = useState("sliding");

    const menuSlidingHeader = [
        { label: "Home", href: "#" },
        { label: "Products", href: "#" },
        { label: "Services", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];

    const iconsSlidingHeader = [
        { icon: <Search size={20} />, onClick: () => alert("Search") },
        { icon: <User size={20} />, onClick: () => alert("User") },
        { icon: <ShoppingCart size={20} />, onClick: () => alert("Shopping Cart") },
    ];

    const categories = [
        { name: "Technology", items: ["Laptops", "Smartphones", "Tablets"] },
        { name: "Fashion", items: ["Clothing", "Accessories", "Footwear"] },
        { name: "Home", items: ["Decoration", "Kitchen", "Garden"] },
    ];

    const iconsInteractiveHeader = [
        { icon: <Bell size={20} />, onClick: () => alert("Bell") },
        { icon: <Mail size={20} />, onClick: () => alert("Mail") },
        { icon: <Settings size={20} />, onClick: () => alert("Settings") },
    ];

    const buttonInteractiveHeader = {
        text: "Sign In",
        onClick: () => alert("Sign In"),
    };

    const navItemsAnimatedHeader = [
        { icon: Home, label: "Home", color: "from-red-500 to-orange-500", href: "#" },
        { icon: Briefcase, label: "Jobs", color: "from-blue-500 to-cyan-500", href: "#" },
        { icon: Book, label: "Blog", color: "from-green-500 to-emerald-500", href: "#" },
        { icon: MessageCircle, label: "Chat", color: "from-purple-500 to-pink-500", href: "#" },
        { icon: Heart, label: "Favorites", color: "from-rose-500 to-red-500", href: "#" },
    ];

    const buttonAnimatedHeader = {
        text: "Get Started",
        onClick: () => alert("Get Started"),
    };

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