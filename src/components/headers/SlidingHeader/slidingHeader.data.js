import { Search, ShoppingCart, User } from "lucide-react";

export const menuSlidingHeader = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];

export const iconsSlidingHeader = [
    { icon: Search, onClick: () => alert("Search") },
    { icon: User, onClick: () => alert("User") },
    { icon: ShoppingCart, onClick: () => alert("Shopping Cart") },
];