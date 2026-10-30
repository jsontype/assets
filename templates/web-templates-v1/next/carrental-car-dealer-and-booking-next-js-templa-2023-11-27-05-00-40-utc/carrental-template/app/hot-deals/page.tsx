import React from "react";
import CarCard from "../_sections/car-card";
import SectionWrapper from "../_sections/section-wrapper";
import SectionTitle from "../_sections/section-title";
import SearchBar from "../_sections/search";

const title = "Hot Deals";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export default function HotDeals() {
  return (
    <>
      <div className="bg-cyan-600 text-white">
        <SectionWrapper>
          <SectionTitle
            title={"Search"}
            subtitle={"Search your hot deal today"}
            dashColor={"white"}
          />
          <SearchBar />
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10">
          <CarCard count={11} offset={3} />
        </div>
      </SectionWrapper>
    </>
  );
}
