import About from "@/src/components/About";
import Contacts from "@/src/components/Contacts";
import Service from "@/src/components/Service";
import {
  CodingSkills,
  DesignSkills,
  LanguagesSkills,
} from "@/src/components/Skills";
import Started from "@/src/components/Started";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const Works = dynamic(() => import("@/src/components/Works"), {
  ssr: false,
});
const Clients = dynamic(() => import("@/src/components/Clients"), {
  ssr: false,
});
const Education = dynamic(() => import("@/src/components/Education"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/src/components/Experience"), {
  ssr: false,
});
const Pricing = dynamic(() => import("@/src/components/Pricing"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/src/components/Testimonials"), {
  ssr: false,
});
const IndexVideo = () => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax-video"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);
  return (
    <Layout>
      {/* Background */}
      <div
        className="background-bg jarallax-video"
        data-jarallax-video="https://youtu.be/S4L8T2kFFck"
      />
      {/* sections */}
      <Started />
      <About />
      <Service />
      <Pricing />
      <Experience />
      <Education />
      <DesignSkills />
      <LanguagesSkills />
      <CodingSkills />
      <Testimonials />
      <Clients />
      <Works />
      <Contacts />
    </Layout>
  );
};
export default IndexVideo;
