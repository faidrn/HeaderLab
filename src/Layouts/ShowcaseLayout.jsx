import React from "react";

const ShowcaseLayout = ({ children }) => {
    return (
        <div 
            className="min-h-screen bg-gray-200 dark:bg-gray-900 flex items-center justify-center transition-colors"
        >
            <div
                className="w-full max-w-6xl bg-gray-200 rounded-2xl shadow-xl overflow-hidden sm:h-128.5 lg:h-80 dark:bg-gray-900 dark:text-white dark:shadow-white/20 transition-colors"
            >
                {children}
            </div>
        </div>
    );
};

export default ShowcaseLayout;