import { color } from "motion";
import { button, text, title } from "motion/react-client";

export const headerColors = {
  slate: {
    from: {
      light: "rgba(15, 23, 42, 0.8)",
      dark: "rgba(0, 0, 0, 0.6)",
    },
    to: {
      light: "rgba(15, 23, 42, 1)",
      dark: "rgba(0, 0, 0, 0.9)",
    },
    cyan: {
      from: "from-cyan-400",
      to: "to-blue-600",
    },
    text: "text-cyan-400",
    dropdown: {
      light: "bg-slate-600",
      dark: "bg-slate-800",
    },
    hoverBackground: "hover:bg-white/10",
    hoverText: "hover:text-white",
    icon: {
      background: "bg-white/10",
      hover: "hover:bg-white/20",
      color: "text-white",
    },
    button: {
      from: {
        light: "from-cyan-500",
        dark: "from-cyan-700",
      },
      to: {
        light: "to-blue-600",
        dark: "to-blue-800",
      },
      hover: {
        light: {
          from: "hover:from-cyan-600",
          to: "hover:to-blue-700",
        },
        dark: {
          from: "dark:hover:from-cyan-900",
          to: "dark:hover:to-blue-900",
        },
      },
      text: "text-white",
    },
  },

  purple: {
    from: {
      light: "from-purple-600",
      dark: "from-purple-900",
    },
    to: {
      light: "to-pink-600",
      dark: "to-pink-900",
    },
    text: "text-purple-600",
    hoverText: "hover:text-amber-300",
    linkHover: "#FFD54F",
  },

  orange: {
    from: {
      light: "from-orange-400",
      dark: "from-orange-700",
    },
    to: {
      light: "to-yellow-500",
      dark: "to-yellow-800",
    },
    text: "text-white",
    subtitle: "text-yellow-400",
    background: {
      light: "bg-slate-900",
      dark: "dark:bg-slate-700",
    },
    logoColor:{
      from: "from-yellow-400",
      to: "to-orange-600",
    },
    backgroundMenus:{
      color: "bg-white/5",
      hover: "hover:bg-white/10",
    },
    button: {
      from: "from-yellow-400",
      to: "to-orange-500",
      text: "text-slate-900",
    },
  },

  white: {
    background: "bg-white",
    darkBackground: "dark:bg-gray-800",
    borderColor: "border-gray-200",
    darkBorderColor: "dark:border-gray-100",
    iconColor: "text-blue-600",
    darkIconColor: "dark:text-blue-500",
    titleColor: "text-gray-900",
    darkTitleColor: "dark:text-white",
    text: "text-gray-600",
    darkText: "dark:text-gray-300",
    hoverText: "hover:text-gray-900",
    darkHoverText: "dark:hover:text-white",
    buttonColor: "bg-blue-600",
    darkButtonColor: "dark:bg-blue-500",
    buttonHover: "hover:bg-blue-700",
    darkButtonHover: "dark:hover:bg-blue-600",
    textButton: "text-white",
    menuButton: {
      background: "bg-gray-100",
      darkBackground: "dark:bg-gray-700",
      text: "text-gray-800",
      darkText: "dark:text-gray-200",
      hover: "hover:bg-gray-200",
      darkHover: "dark:hover:bg-gray-600",
    },
  },

};