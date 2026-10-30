"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SectionTitle from "./section-title";
import { LiaQuoteLeftSolid } from "react-icons/lia";

export default function Testimonials() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [slider1, setSlider1] = useState();
  const [slider2, setSlider2] = useState();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const quotes = [
    {
      name: "William Babel",
      position: "Sales",
      message:
        "Your service was the best I have taken in my experience, ever. Support staffs were quick and reliable with my issues and excited to work with you guys more. They will improve your website in 15 minutes. Hire the company and follow what they say and your business growth is going to jump like a skyrocket.",
      image: "/user-1.jpg",
    },
    {
      name: "Raymond Atkins",
      position: "Designer",
      message:
        "Your service was the best I have taken in my experience, ever. Support staffs were quick and reliable with my issues and excited to work with you guys more. They will improve your website in 15 minutes. Hire the company and follow what they say and your business growth is going to jump like a skyrocket.",
      image: "/user-2.jpg",
    },
    {
      name: "Katherine Moss",
      position: "Producor",
      message:
        "Your service was the best I have taken in my experience, ever. Support staffs were quick and reliable with my issues and excited to work with you guys more. They will improve your website in 15 minutes. Hire the company and follow what they say and your business growth is going to jump like a skyrocket.",
      image: "/user-3.jpg",
    },
    {
      name: "Jordan Mossiah",
      position: "Producor",
      message:
        "Your service was the best I have taken in my experience, ever. Support staffs were quick and reliable with my issues and excited to work with you guys more. They will improve your website in 15 minutes. Hire the company and follow what they say and your business growth is going to jump like a skyrocket.",
      image: "/team-3.jpg",
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };
  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };
  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "0px",
  };
  return (
    <div className="bg-orange-500 py-8 lg:py-16 2xl:py-24">
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-white">
          <SectionTitle
            title={"Happy Clients"}
            subtitle={"What our customers say about us"}
            dashColor={"fill-white"}
          />
        </div>
        <Slider
          className="car-carousel text-center cursor-move mt-8 mb-6"
          {...settings}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider || (null as any))}
        >
          {quotes.map((quote, index) => (
            <div className="relative" key={index}>
              <blockquote className="text-slate-50">{quote.message}</blockquote>
              <hr className="mt-8 border-orange-400" />
              <h3 className="text-slate-50 text-lg mt-8">{quote.name}</h3>
              <p className="text-slate-200 font-normal text-sm">
                {quote.position}
              </p>
              <LiaQuoteLeftSolid
                size={64}
                className="text-slate-100 absolute -mt-16"
              />
              <LiaQuoteLeftSolid
                size={64}
                className="text-slate-100 absolute right-0 -mt-16 transform -scale-x-100"
              />
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap z-10 mr-auto ml-auto w-72 -mb-24 lg:-mb-32 2xl:-mb-40">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider || (null as any))}
          >
            {quotes.map((slide, index) => (
              <div
                className="overflow-hidden cursor-move w-[96px] h-[96px]"
                key={index}
              >
                <div
                  className="slick-slide-thumbnail w-[64px] h-[64px] relative z-10 bg-cover bg-center rounded-full border-4 shadow-lg m-4 mt-1"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-orange-500 w-[92px] h-[92px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full bottom-0 -mb-6"></div>
      </div>
    </div>
  );
}
