import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import AboutTwoSection from "@components/sections/AboutTwo";
import CountersSection from "@components/sections/Counters";
import ContactSection from "@components/sections/Contact";
import AwardsSection from "@components/sections/Awards";

const HeroOneSlider = dynamic( () => import("@components/sliders/HeroOne"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const ProcessSlider = dynamic( () => import("@components/sliders/Process"), { ssr: false } );

export const metadata = {
  title: {
		default: "Home 2",
	},
  description: AppData.settings.siteDescription,
}

const Home2 = () => {
  return (
    <>
      <HeroOneSlider />
      <PartnersSlider bgStyle={"accent"} />
      <AboutTwoSection />
      <ProcessSlider bgStyle={"soft"} />
      <CountersSection />
      <ContactSection />
      <AwardsSection />
    </>
  );
};
export default Home2;