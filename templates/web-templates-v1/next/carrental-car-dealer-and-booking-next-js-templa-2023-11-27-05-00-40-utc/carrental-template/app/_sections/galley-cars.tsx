"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";

export default function GalleryCars({ count }: { count?: number }) {
  count = count ? count : 3;

  const data = [
    {
      image: "/car-9.jpg",
      name: "Fastest Car Ever",
      vendor: "Mercedes",
      link: "#",
    },
    {
      image: "/car-8.jpg",
      name: "Feel The Turbo",
      vendor: "BMW",
      link: "#",
    },
    {
      image: "/car-6.jpg",
      name: "Offroad Monster",
      vendor: "Toyota",
      link: "#",
    },
    {
      image: "/car-1.jpg",
      name: "Offroad Monster",
      vendor: "Toyota",
      link: "#",
    },
    {
      image: "/car-2.jpg",
      name: "Fastest Car Ever",
      vendor: "Mercedes",
      link: "#",
    },
    {
      image: "/car-3.jpg",
      name: "Feel The Turbo",
      vendor: "BMW",
      link: "#",
    },
    {
      image: "/car-4.jpg",
      name: "Offroad Monster",
      vendor: "Toyota",
      link: "#",
    },
    {
      image: "/car-5.jpg",
      name: "Offroad Monster",
      vendor: "Toyota",
      link: "#",
    },
    {
      image: "/car-7.jpg",
      name: "Fastest Car Ever",
      vendor: "Mercedes",
      link: "#",
    },
    {
      image: "/car-8.jpg",
      name: "Feel The Turbo",
      vendor: "BMW",
      link: "#",
    },
    {
      image: "/car-9.jpg",
      name: "Offroad Monster",
      vendor: "Toyota",
      link: "#",
    },
  ];

  return (
    <>
      {data.slice(0, count).map((car, index) => (
        <div className="gallery-item relative group/item" key={index}>
          <div className="relative aspect-[4/3] bg-gray-200">
            <Image
              className="object-cover"
              src={car.image}
              fill
              alt={car.name}
            />
          </div>
          <div className="flex justify-center flex-col absolute w-full h-full top-0 hover:backdrop-blur-sm hover:backdrop-brightness-50 transition ease-in-out group/edit invisible group-hover/item:visible delay-350">
            <div className="text-center">
              <h4 className="text-white text-sm translate-y-2 opacity-0 transition ease-linear delay-300 group-hover/item:translate-y-0 group-hover/item:opacity-100">
                {car.name}
              </h4>
              <p className="text-white translate-y-2 opacity-0 transition ease-linear delay-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
                {car.vendor}
              </p>
            </div>
          </div>
          <BsPlusLg
            className="icon-plus absolute right-0 bottom-0 m-4 text-white invisible group-hover/item:visible group-hover/item:animate-spin"
            size={32}
          />
        </div>
      ))}
    </>
  );
}
