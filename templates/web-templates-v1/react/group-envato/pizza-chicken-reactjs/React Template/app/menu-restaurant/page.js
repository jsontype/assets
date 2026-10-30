import { AboutUs4 } from "@/components/AboutUs";
import Burger from "@/components/Burger";
import CategoryBanner from "@/components/CategoryBanner";
import Headline from "@/components/Headline";
import PageBanner from "@/components/PageBanner";
import RestaurantMenu from "@/components/RestaurantMenu";
import WellFoodLayout from "@/layout/WellFoodLayout";
const page = () => {
  return (
    <WellFoodLayout>
      {/* Page Banner Start */}
      <PageBanner pageTitle={"Menu Restaurant"} />
      {/* Page Banner End */}
      {/* About Us Area start */}
      <AboutUs4 />
      {/* About Us Area end */}
      {/* Headline area start */}
      <Headline />
      {/* Headline Area end */}
      {/* Restaurant Menu Area start */}
      <RestaurantMenu />
      {/* Restaurant Menu Area end */}
      {/* Category Banner area start */}
      <CategoryBanner />
      {/* Category Banner area end */}
      {/* Burger Area start */}
      <section className="burger-area pt-100 rpt-70 pb-130 rpb-100 rel z-1">
        <div className="container">
          <Burger />
        </div>
      </section>
      {/* Burger Area end */}
    </WellFoodLayout>
  );
};
export default page;
