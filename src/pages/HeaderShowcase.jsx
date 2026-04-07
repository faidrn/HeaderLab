import { useState } from "react";
import ShowcaseLayout from "../Layouts/ShowcaseLayout";
import { SlidingHeader, InteractiveHeader } from "../components/headers";


const HeaderShowcase = () => {
    const [active, setActive] = useState("sliding");

    return (
        <ShowcaseLayout>
            <div
                className="p-4 border-b flex gap-4"
            >
                <button
                    onClick={() => setActive("sliding")}
                    className="px-4 py-2 bg-black text-white rounded"
                >
                    Sliding Header
                </button>
                
                <button
                    onClick={() => setActive("interactive")}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Interactive Header
                </button>
            </div>

            {active === "sliding" && <SlidingHeader />}
            {active === "interactive" && <InteractiveHeader />}

            <div
                className="p-10 text-center text-gray-500"
            >
                Example content to display the header
            </div>
        </ShowcaseLayout>
    );
};

export default HeaderShowcase;