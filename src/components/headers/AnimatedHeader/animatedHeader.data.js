import { Home, Briefcase, Book, MessageCircle, Heart } from "lucide-react";

export const navItemsAnimatedHeader = [
    { icon: Home, label: "Home", color: "from-red-500 to-orange-500", href: "#" },
    { icon: Briefcase, label: "Jobs", color: "from-blue-500 to-cyan-500", href: "#" },
    { icon: Book, label: "Blog", color: "from-green-500 to-emerald-500", href: "#" },
    { icon: MessageCircle, label: "Chat", color: "from-purple-500 to-pink-500", href: "#" },
    { icon: Heart, label: "Favorites", color: "from-rose-500 to-red-500", href: "#" },
];

export const buttonAnimatedHeader = {
    text: "Get Started",
    onClick: () => alert("Get Started"),
};