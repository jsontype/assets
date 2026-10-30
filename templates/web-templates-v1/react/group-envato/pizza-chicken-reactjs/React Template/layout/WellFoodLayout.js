"use client";
import { wellfoodUtility } from "@/utility";
import { useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";

const WellFoodLayout = ({ children, bgBlack, footer }) => {
  useEffect(() => {
    niceSelect();
    wellfoodUtility.animation();
    console.log(bgBlack);
    if (bgBlack) {
      document.querySelector(".page-wrapper").classList.add("bg-black");
    } else {
      if (
        document.querySelector(".page-wrapper").classList.contains("bg-black")
      ) {
        document.querySelector(".page-wrapper").classList.remove("bg-black");
      }
    }
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer footer={footer} />
    </div>
  );
};
export default WellFoodLayout;
