"use client";
import React from "react";
import { heading_font } from "../fonts";
import Search from "./search";

export default function Hero() {
  return (
    <div
      className="hero flex px-4 lg:px-12 py-12 sm:py-24 lg:py-48 justify-center align-middle bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/hero-banner.jpg)` }}
    >
      <div className="max-w-auto md:max-w-7xl mx-auto grid gap-4 md:gap-12 lg:gap-16">
        <h1
          className={`text-2xl md:text-3xl lg:text-5xl text-center text-white ${heading_font.className}`}
        >
          Choose your dream rental car and
          <br />
          make your ride awesome
        </h1>
        <Search />
      </div>
    </div>
  );
}
