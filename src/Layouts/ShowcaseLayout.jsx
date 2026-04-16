import React from "react";

const ShowcaseLayout = ({ children }) => {
    return (
        <div 
            className="min-h-screen bg-gray-200 flex items-center justify-center"
        >
            <div
                className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden h-80"
            >
                {children}
            </div>
        </div>
    );
};

export default ShowcaseLayout;