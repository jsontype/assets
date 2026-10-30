import React from "react";
import PageTitle from "../_sections/page-title";
import CarCards from "../_sections/car-card";
import SidebarFilter from "../_sections/sidebar-filter";
import Pagination from "../_sections/pagination";
import SectionWrapper from "../_sections/section-wrapper";

const title = "Vehicle List";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export default function Cars() {
  return (
    <>
      <PageTitle title={title} />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SidebarFilter />
          <div className="col-span-1 md:col-span-2 order-first md:order-last">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
              <CarCards count={8} offset={2} />
            </div>
            <Pagination />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
