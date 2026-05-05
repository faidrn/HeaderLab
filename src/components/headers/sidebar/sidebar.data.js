import { Bell, Mail, Settings, Home, User } from "lucide-react";

export const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'Profile', href: '#profile' },
    { icon: Mail, label: 'Messages', href: '#messages' },
    { icon: Bell, label: 'Notifications', href: '#notifications' },
    { icon: Settings, label: 'Settings', href: '#settings' },
  ];

export const iconsSidebar = [
    { icon: Home, onClick: () => alert("Home") },
    { icon: User, onClick: () => alert("User") },
    { icon: Mail, onClick: () => alert("Messages") },
    { icon: Bell, onClick: () => alert("Notifications") },
    { icon: Settings, onClick: () => alert("Settings") },
];


export const buttonUser = {
    text: "User",
    onClick: () => alert("User"),
};