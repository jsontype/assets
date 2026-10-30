"use client";

import { useEffect } from "react";
import { Timer } from "@common/timer";

const TimerModule = () => {
    useEffect(() => {
        Timer();
    }, []);

    return (
        <>
        {/* timer */}
        <div id="timer" className="mil-timer mil-mb-90">
            <div className="mil-timer-item">
                <span id="days" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">days</h6>
            </div>
            <div className="mil-timer-item">
                <span id="hours" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">hours</h6>
            </div>
            <div className="mil-timer-item">
                <span id="minutes" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">minutes</h6>
            </div>
            <div className="mil-timer-item">
                <span id="seconds" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">seconds</h6>
            </div>
        </div>
        {/* timer end */}
        </>
    );
};
export default TimerModule;