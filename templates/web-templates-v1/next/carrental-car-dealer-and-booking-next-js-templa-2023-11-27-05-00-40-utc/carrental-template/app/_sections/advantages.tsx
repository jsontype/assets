"use client";
import React from "react";
import SectionWrapper from "./section-wrapper";
import SectionTitle from "./section-title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdMoneyOffCsred } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { BiSolidCarCrash } from "react-icons/bi";
import { IoCompassOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";

function Service({ index }: { index: number }): React.ReactNode {
  const icons = [
    RiCaravanLine,
    FaHandHoldingDollar,
    IoCompassOutline,
    MdMoneyOffCsred,
    BiSolidCarCrash,
  ];

  const titles = [
    "Door Step Delivery",
    "No Hidden Charges",
    "Go Anywhere",
    "Best Price Guarantee",
    "Damage Insurance",
  ];

  const i = index % icons.length;

  const Icon = icons[i];
  return (
    <div className="grid gap-4 mx-auto text-center w-[100px]" key={index}>
      <Icon size={64} className="mx-auto" />
      <h4 className="text-md">{titles[i]}</h4>
    </div>
  );
}

export default function Advantages() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="-mt-16 sm:-mt-36 lg:-mt-40 z-10 relative text-white bg-cyan-600">
      <SectionWrapper>
        <SectionTitle
          title={"Advantages"}
          subtitle={"You know about our specialties"}
          dashColor={"white"}
        />
        <Slider {...settings} className="service-slider cursor-move">
          <Service index={1} />
          <Service index={3} />
          <Service index={2} />
          <Service index={4} />
          <Service index={5} />
          <Service index={6} />
          <Service index={7} />
          <Service index={8} />
        </Slider>
      </SectionWrapper>
    </div>
  );
}
