/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs3 from "../../components/About-Us3";
import AfterBefore from "../../components/After-Before";
import Blogs2 from "../../components/Blogs2";
import Intro3 from "../../components/Intro3";
import Numbers from "../../components/Numbers";
import Services3 from "../../components/Services3";
import Team1 from "../../components/Team1";
import Testimonials1 from "../../components/Testimonials1";
import Works1 from "../../components/Works1";
import LightLayout from "../../layouts/light";
const Home3 = () => {
 React.useEffect(() => {
   document.querySelector("body").classList.add("homepage");
 }, []);
  return (
    <LightLayout>
      <Intro3 />
      <Services3 />
      <Works1 />
      <AboutUs3 />
      <AfterBefore />
      <Numbers />
      <Team1 />
      <Testimonials1 />
      <Blogs2 />
    </LightLayout>
  );
};

export default Home3;
