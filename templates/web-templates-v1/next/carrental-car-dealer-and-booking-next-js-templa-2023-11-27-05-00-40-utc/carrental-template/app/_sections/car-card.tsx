"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuFuel, LuStar } from "react-icons/lu";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";

interface Props {
  count?: number;
  offset?: number;
}
const cars = [
  {
    id: 1,
    name: "Mustang Shelby",
    image: "/car-1.jpg",
    description: "",
    price: "$75.00 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 2,
    name: "Bentley Cont",
    image: "/car-2.jpg",
    description: "",
    price: "$55.00 /hour",
    rate: 4,
    fuel: "Gasoline",
    seats: 5,
    transmission: "Automatic",
    link: "/cars/single",
  },
  {
    id: 3,
    name: "Audi A7 2017",
    image: "/car-3.jpg",
    description: "",
    price: "$45.00 /hour",
    rate: 3,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 4,
    name: "Alfa Romeo",
    image: "/car-4.jpg",
    description: "",
    price: "$15.00 /hour",
    rate: 2,
    fuel: "Gasoline",
    seats: 3,
    transmission: "Automatic",
    link: "/cars/single",
  },
  {
    id: 5,
    name: "Bugatti",
    image: "/car-5.jpg",
    description: "",
    price: "$125.00 /hour",
    rate: 3,
    fuel: "Electric",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 6,
    name: "Dodge Challenger",
    image: "/car-6.jpg",
    description: "",
    price: "$35.00 /hour",
    rate: 3,
    fuel: "Diesel",
    seats: 4,
    transmission: "Auto",
    link: "/cars/single",
  },
  {
    id: 7,
    name: "Maserati Khamsin",
    image: "/car-7.jpg",
    description: "",
    price: "$75.00 /hour",
    rate: 4,
    fuel: "Diesel",
    seats: 5,
    transmission: "Automatic",
    link: "/cars/single",
  },
  {
    id: 8,
    name: "Ford Thunderbird",
    image: "/car-8.jpg",
    description: "",
    price: "$75.00 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 4,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 9,
    name: "Nissan Qashqai",
    image: "/car-9.jpg",
    description: "",
    price: "$75 /hour",
    rate: 2,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 10,
    name: "Mustang Shelby",
    image: "/car-1.jpg",
    description: "",
    price: "$75 /hour",
    rate: 4,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 11,
    name: "Mustang Shelby",
    image: "/car-2.jpg",
    description: "",
    price: "$75 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 12,
    name: "Nissan Qashqai",
    image: "/car-3.jpg",
    description: "",
    price: "$25.00 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 13,
    name: "Mustang Shelby",
    image: "/car-9.jpg",
    description: "",
    price: "$75 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 14,
    name: "Mustang Shelby",
    image: "/car-8.jpg",
    description: "",
    price: "$75 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 15,
    name: "Mustang Shelby",
    image: "/car-7.jpg",
    description: "",
    price: "$75 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
  {
    id: 16,
    name: "Mustang Shelby",
    image: "/car-6.jpg",
    description: "",
    price: "$75 /hour",
    rate: 5,
    fuel: "Diesel",
    seats: 3,
    transmission: "Manual",
    link: "/cars/single",
  },
];

const getStarIcons = (rate: number) => {
  let content = [];
  for (let i = 0; i < rate; i++) {
    content.push(<LuStar className="text-orange-300" />);
  }
  for (let i = 0; i < 5 - rate; i++) {
    content.push(<LuStar className="text-gray-300" />);
  }
  return content;
};

export default function CarCard(props: Props) {
  const { count = 3, offset = 0 } = props;

  return (
    <>
      {cars.slice(offset, count).map((car, index) => (
        <div
          className="filter bg-white drop-shadow-md transition ease-linear hover:drop-shadow-xl"
          key={index}
        >
          <div className="relative">
            <Link href={car.link}>
              <div className="relative aspect-[16/9] bg-gray-200">
                <Image
                  className="object-cover"
                  src={car.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  alt={car.name}
                />
                <p className="px-4 py-2 text-sm font-bold text-white bg-cyan-500 absolute right-0 bottom-0">
                  {car.price}
                </p>
              </div>
            </Link>
            <div className="flex items-center p-6 gap-3">
              <h3 className="text-xl font-semibold">
                <Link href={car.link} className="hover:no-underline">
                  {car.name}
                </Link>
              </h3>
              <div className="flex-grow"></div>
              <div className="flex gap-05">{getStarIcons(car.rate)}</div>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="grid gap-3 p-6">
            <div className="flex">
              <div className="flex gap-2 w-[140px] items-center">
                <LuFuel />
                <span>Fuel Type</span>
              </div>
              <div className="mr-3">:</div>
              <div>{car.fuel}</div>
            </div>
            <div className="flex">
              <div className="flex gap-2 w-[140px] items-center">
                <MdAirlineSeatReclineExtra />
                <span>Seats</span>
              </div>
              <div className="mr-3">:</div>
              <div>{car.seats}</div>
            </div>
            <div className="flex">
              <div className="flex gap-2 w-[140px] items-center">
                <GiGearStickPattern />
                <span>Transmission</span>
              </div>
              <div className="mr-3">:</div>
              <div>{car.transmission}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
