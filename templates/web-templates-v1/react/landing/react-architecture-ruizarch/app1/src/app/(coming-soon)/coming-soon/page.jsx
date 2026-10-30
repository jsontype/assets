import React from "react";

import AppData from "@data/app.json";

import Timer from "@layouts/timer/Index";

export const metadata = {
    title: {
        default: "Coming Soon",
    },
    description: AppData.settings.siteDescription,
}

const ComingSoon = () => {
  return (
    <>
        {/* banner */}
        <section className="mil-banner mil-relative">
            <img src="img/photo/15.jpg" className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />

            <div className="mil-overlay" />

            <div className="container">
                <div className="mil-background-grid mil-top-space" />

                <div className="mil-banner-content">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-xl-5">

                            <div className="mil-sm-center mil-mb-90">
                                <span className="mil-suptitle mil-light mil-upper mil-mb-60"><span className="mil-accent">New</span> Experience</span>
                                <h1 className="mil-upper mil-light mil-mb-60">Coming<br/>Soon</h1>
                                <p className="mil-light-soft">Soon we will live an unforgettable experience all together with our new website, we will bring tools to improve our communication and improve the products that improve the lives of our customers.</p>
                            </div>

                        </div>
                        <div className="col-xl-5">
                            
                            <p className="mil-light-soft mil-timer-text mil-mb-30">We’re Getting Ready to Launch in:</p>

                            <Timer />

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* banner end */}
    </>
  );
};
export default ComingSoon;
