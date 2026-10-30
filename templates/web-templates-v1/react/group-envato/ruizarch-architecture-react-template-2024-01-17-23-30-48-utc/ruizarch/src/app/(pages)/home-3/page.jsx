import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";

import FeaturesSection from "@components/sections/Features";
import AboutThreeSection from "@components/sections/AboutThree";
import PricingSection from "@components/sections/Pricing";
import CalculatorSection from "@components/sections/Calculator";
import SkillsSection from "@components/sections/Skills";
import LatestPostsSection from "@components/sections/LatestPosts";

const HeroTwoSlider = dynamic( () => import("@components/sliders/HeroTwo"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const RecentProjectsSlider = dynamic( () => import("@components/sliders/RecentProjects"), { ssr: false } );

export const metadata = {
  title: {
		default: "Home 3",
	},
  description: AppData.settings.siteDescription,
}

async function Home3() {
  const posts = await getAllPosts();

  return (
    <>
      <HeroTwoSlider />
      <FeaturesSection />
      <AboutThreeSection />
      <TestimonialSlider showPartners={1} />
      <PricingSection />
      <CalculatorSection />
      <RecentProjectsSlider />
      <SkillsSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} paddingTop />
      </Suspense>
    </>
  );
};
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}