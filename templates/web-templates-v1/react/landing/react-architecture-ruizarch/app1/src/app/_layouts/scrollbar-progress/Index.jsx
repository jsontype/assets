'use client';

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const ScrollbarProgressModule = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
        {/* scrollbar progress */}
        <div className="mil-progress-track">
            <div className="mil-progress" />
        </div>
        {/* scrollbar progress end */}
        </>
    );
};
export default ScrollbarProgressModule;