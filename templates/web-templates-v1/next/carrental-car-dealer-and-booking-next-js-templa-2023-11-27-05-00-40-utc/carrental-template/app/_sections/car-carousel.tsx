"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarCarousel() {
  const cars = [
    {
      id: 2,
      name: "Bentley Cont",
      image: "/car-2.jpg",
      description: "",
      price: "$55.00 /hour",
      rate: 5,
      fuel: "diesel",
      seats: 5,
      transmission: "Manual",
      label: "Hot Deal",
      link: "/car-single",
    },
    {
      id: 7,
      name: "Maserati Khamsin",
      image: "/car-3.jpg",
      description: "",
      price: "$75.00 /hour",
      rate: 4,
      fuel: "diesel",
      seats: 5,
      transmission: "Manual",
      label: "Best Offer",
      link: "/car-single",
    },
    {
      id: 10,
      name: "Mustang Shelby",
      image: "/car-5.jpg",
      description: "",
      price: "$75 /hour",
      rate: 5,
      fuel: "diesel",
      seats: 3,
      transmission: "Manual",
      label: "Hot Deal",
      link: "/car-single",
    },
    {
      id: 16,
      name: "Audi A8",
      image: "/car-7.jpg",
      description: "",
      price: "$75 /hour",
      rate: 5,
      fuel: "diesel",
      seats: 3,
      transmission: "Manual",
      label: "Hot Deal",
      link: "/car-single",
    },
  ];
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <div className="header py-4 max-w-7xl mx-auto">
      <Slider className="car-carousel" {...settings}>
        {cars.map((car, index) => (
          <div className="mb-1 max-w-lg" key={index}>
            <div className="relative aspect-[16/9] bg-gray-200">
              <Image
                className="object-cover"
                src={car.image}
                alt={car.name}
                fill
              />
              <Link href={car.link}>
                <div className="absolute top-3 left-3 rounded-full py-1 px-4 uppercase text-xs text-white bg-orange-600">
                  {car.label}
                </div>
              </Link>
            </div>
            <div className="mt-6 flex gap-3">
              <Link href={car.link}>
                <h3 className="text-sm">{car.name}</h3>
              </Link>
              <div className="flex-grow"></div>
              <p className="text-xl">{car.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
