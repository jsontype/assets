import PageBanner from "@/components/PageBanner";
import WellFoodLayout from "@/layout/WellFoodLayout";
import dynamic from "next/dynamic";
const GalleryIsotope = dynamic(() => import("@/components/GalleryIsotope"), {
  ssr: false,
});
const page = () => {
  return (
    <WellFoodLayout>
      <PageBanner pageTitle={"Gallery"} />
      <section className="photo-gallery-area pt-130 rpt-100 pb-60 rpb-30 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">photo gallery</span>
                <h2>explore latest photo gallery</h2>
              </div>
            </div>
          </div>
          <GalleryIsotope />
        </div>
      </section>
    </WellFoodLayout>
  );
};
export default page;
