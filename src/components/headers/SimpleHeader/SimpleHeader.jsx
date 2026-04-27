import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { headerColors } from "../../../styles/headerTokens";
import { useTheme } from "../../../theme/ThemeProvider";
import { div } from "motion/react-client";

const SimpleHeader = ({
  title = "My Logo",
  menuItems = [],
  button = [],
  color = "white",
}) => {
    const { theme } = useTheme();
    const c = headerColors[color];

    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div
            className={`w-full ${isDark ? 'dark' : 'light'} transition-colors`}
        >
            <header
                className={`${c.background} ${c.borderColor} ${c.darkBackground} ${c.darkBorderColor} px-4 sm:px-6 py-4 transition-colors`}
            >
                <div
                    className="max-w-7xl mx-auto"
                >
                    <div className="w-full flex items-center justify-between md:grid md:grid-cols-3">
                        <div
                            className="flex items-center gap-2 shrink-0"
                        >
                            {/* Logo and Title */}
                            <Sparkles className={`w-6 h-6 ${c.iconColor} ${c.darkIconColor}`} />
                            <h1 
                                className={`${c.titleColor} ${c.darkTitleColor} font-bold text-xl whitespace-nowrap`}
                            >
                                {title}
                            </h1>
                        </div>
                            
                        {/* Desktop Navigation Menu */}
                        <nav
                            className="hidden md:flex items-center justify-center gap-6"
                        >
                            {menuItems.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.href} 
                                    className={`${c.text} ${c.darkText} ${c.hoverText} ${c.darkHoverText}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        

                        <div className="flex items-center justify-end gap-2 sm:gap-4 shrink-0">
                            <button
                                onClick={button.onClick}
                                className={`hidden sm:block ${c.buttonColor} ${c.textButton} ${c.darkButtonColor} ${c.darkButtonHover} px-4 py-2 rounded-lg ${c.buttonHover} ${c.darkButtonHover} transition-colors`}
                            >
                                {button.text}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`md:hidden p-2 rounded-lg ${c.menuButton.background} ${c.menuButton.darkBackground} ${c.menuButton.text} ${c.menuButton.darkText} ${c.menuButton.hover} ${c.menuButton.darkHover} transition-colors`}
                            >
                                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                    
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <nav className="flex flex-col gap-4">
                                {menuItems.map((item, index) => (
                                    <a 
                                        key={index}
                                        href={item.href} 
                                        className={`${c.text} ${c.darkText} ${c.hoverText} ${c.darkHoverText}`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                
                                <button
                                    onClick={button.onClick}
                                    className={`${c.buttonColor} ${c.textButton} ${c.darkButtonColor} ${c.darkButtonHover} px-4 py-2 rounded-lg ${c.buttonHover} ${c.darkButtonHover} text-left transition-colors`}
                                >
                                    {button.text}
                                </button>
                            </nav>
                        </div>
                    )}
                </div>

            </header>
        </div>
    );
};

export default SimpleHeader;