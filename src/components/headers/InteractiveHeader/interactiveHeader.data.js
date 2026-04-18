import { Bell, Mail, Settings } from "lucide-react";

 export const categories = [
    { name: "Technology", items: ["Laptops", "Smartphones", "Tablets"] },
    { name: "Fashion", items: ["Clothing", "Accessories", "Footwear"] },
    { name: "Home", items: ["Decoration", "Kitchen", "Garden"] },
];

export const iconsInteractiveHeader = [
    { icon: Bell, onClick: () => alert("Bell") },
    { icon: Mail, onClick: () => alert("Mail") },
    { icon: Settings, onClick: () => alert("Settings") },
];

export const buttonInteractiveHeader = {
    text: "Sign In",
    onClick: () => alert("Sign In"),
};