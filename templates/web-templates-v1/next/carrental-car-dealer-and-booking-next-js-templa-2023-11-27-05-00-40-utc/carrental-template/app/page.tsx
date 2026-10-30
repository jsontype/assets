import Hero from "./_sections/hero";
import ServiceBar from "./_sections/service-bar";
import CarList from "./_sections/car-list";
import HowItWorks from "./_sections/how-it-works";
import Mobile from "./_sections/mobile";
import HotDeals from "./_sections/hot-deals";
import Testimonials from "./_sections/testimonials";
import CallToAction from "./_sections/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceBar />
      <CarList />
      <HowItWorks />
      <Mobile />
      <HotDeals />
      <Testimonials />
      <CallToAction />
    </>
  );
}
