"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdMoneyOffCsred } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { BiSolidCarCrash } from "react-icons/bi";
import { IoCompassOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";

const List = ({ title }: { title: string }) => {
  return (
    <div className="bg-green-400">
      <div className="flex">
        <MdMoneyOffCsred fill="brand.500" color="brand.500" />
        <h3 className="capitalize">{title}</h3>
      </div>
    </div>
  );
};

export default function Carousel() {
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
    <div className="bg-gray-100">
      <div className="header max-w-7xl mx-auto py-4">
        <Slider {...settings}>
          <div>
            <div className="flex">
              <MdMoneyOffCsred size={24} fill="brand.500" color="brand.500" />
              <h3 className="capitalize">No hidden charges</h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <RiCaravanLine size={24} fill="brand.500" color="brand.500" />
              <h3 className="capitalize">Door step delivery</h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <IoCompassOutline size={24} fill="brand.500" color="brand.500" />
              <h3 className="capitalize">Go anywhere</h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <FaHandHoldingDollar
                size={24}
                fill="brand.500"
                color="brand.500"
              />
              <h3 className="capitalize">Best price guarantee</h3>
            </div>
          </div>
          <div>
            <div className="flex">
              <BiSolidCarCrash size={24} fill="brand.500" color="brand.500" />
              <h3 className="capitalize">Damage insurance</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
