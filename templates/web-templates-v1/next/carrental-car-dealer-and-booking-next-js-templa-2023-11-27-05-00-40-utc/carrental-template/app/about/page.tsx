import React from "react";
import PageTitle from "../_sections/page-title";
import WhatWeAre from "../_sections/what-we-are";
import Advantages from "../_sections/advantages";
import Team from "../_sections/team";
import Gallery from "../_sections/gallery";

const title = "About Us";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export default function About() {
  return (
    <>
      <PageTitle title={title} />
      <article>
        <WhatWeAre />
        <Advantages />
        <Team />
        <Gallery />
      </article>
    </>
  );
}
