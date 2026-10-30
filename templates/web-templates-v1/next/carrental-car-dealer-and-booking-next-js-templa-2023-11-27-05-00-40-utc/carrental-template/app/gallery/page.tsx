import React from "react";
import PageTitle from "../_sections/page-title";
import GalleryCars from "../_sections/galley-cars";
import SectionWrapper from "../_sections/section-wrapper";

const title = "Gallery";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export default function GalleryPage() {
  return (
    <>
      <PageTitle title={title} />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GalleryCars count={12} />
        </div>
      </SectionWrapper>
    </>
  );
}
