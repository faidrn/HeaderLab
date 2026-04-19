import { color } from "motion";
import { button, text } from "motion/react-client";

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
    text: "text-orange-400",
  },
};