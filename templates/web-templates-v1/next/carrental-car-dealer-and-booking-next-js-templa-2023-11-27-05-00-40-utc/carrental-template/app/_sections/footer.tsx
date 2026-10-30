"use client";
import React from "react";
import Link from "next/link";
import { heading_font } from "../fonts";
import FooterSub from "./footer-sub";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiRightArrowAlt,
} from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import { IoCarSportOutline, IoLogoTwitter } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";
import CountUp, { useCountUp } from "react-countup";
import AppleButton from "./button-apple";
import GooglePlayButton from "./button-googleplay";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <footer className="footer bg-slate-700 text-slate-400">
        <section className="section max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-4 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="grid gap-6">
              <h4 className={`text-slate-200 text-lg font-medium ${heading_font.className}`}>About Us</h4>
              <p>
                Welcome to our Car rental demo website. We search thousands of
                destinations and compare thousands of car hire deals to help you
                find your perfect drive at a low price.
              </p>
            </div>
            <div className="grid gap-6">
              <h4 className={`text-slate-200 text-lg font-medium ${heading_font.className}`}>Navigation</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/about">
                        About us
                      </Link>
                    </li>
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/hot-deals">
                        Hot deals
                      </Link>
                    </li>
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/cars">
                        Cars
                      </Link>
                    </li>
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/book">
                        Book a car
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/faq">
                        Faq
                      </Link>
                    </li>
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li className="flex gap-2 align-middle items-center">
                      <BiRightArrowAlt className="text-blue-500" />
                      <Link className="text-slate-300" href="/contact">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <h4 className={`text-slate-200 text-lg font-medium ${heading_font.className}`}>
                Interesting facts
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-6">
                  <div className="flex gap-3">
                    <FiSmile size={30} />
                    <div className="gap-1">
                      <CountUp
                        className="text-2xl"
                        scrollSpyDelay={200}
                        end={1584200}
                        suffix="+"
                      />
                      <p className="text-sm">Customers</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <IoCarSportOutline size={30} />
                    <div className="gap-1">
                      <CountUp
                        className="text-2xl"
                        scrollSpyDelay={200}
                        end={7500}
                        suffix="+"
                      />
                      <p className="text-sm">Cabs</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  <div className="flex gap-3">
                    <SlSpeedometer size={30} />
                    <div className="gap-1">
                      <CountUp
                        className="text-2xl"
                        scrollSpyDelay={200}
                        end={950000}
                        suffix="+"
                      />
                      <p className="text-sm">Daily kilometers</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <GiSteeringWheel size={30} />
                    <div className="gap-1">
                      <CountUp
                        className="text-2xl"
                        scrollSpyDelay={200}
                        end={956}
                        suffix="+"
                      />
                      <p className="text-sm">Daily trips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <h4 className={`text-slate-200 text-lg font-medium ${heading_font.className}`}>Subscribe Us</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-lg px-5 bg-slate-600 h-[3rem] border-0 rounded-none focus:outline-sky-600 focus-visible:border-sky-600
                  "
                />
                <Button className="bg-sky-600 rounded-none w-[3.3rem] h-[3rem]">
                  GO
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              <h4 className={`text-slate-200 text-lg font-medium ${heading_font.className}`}>Download Apps</h4>
              <div className="flex gap-2">
                <AppleButton
                  borderColor="border-slate-400"
                  textColor="slate-400"
                  link="#"
                />
                <GooglePlayButton
                  borderColor="border-slate-400"
                  textColor="slate-400"
                  link="#"
                />
              </div>
            </div>
            <div className="grid gap-6">
              <h4 className={`text-slate-200 text-lg font-medium ${heading_font.className}`}>Follow Us</h4>
              <div className="flex gap-1">
                <div className="bg-slate-600 overflow-hidden group/iconhover p-3">
                  <BiLogoFacebook
                    size={24}
                    className="group-hover/iconhover:animate-toTopFromBottom"
                  />
                </div>
                <div className="bg-slate-600 overflow-hidden group/iconhover p-3">
                  <IoLogoTwitter
                    size={24}
                    className="group-hover/iconhover:animate-toTopFromBottom"
                  />
                </div>
                <div className="bg-slate-600 overflow-hidden group/iconhover p-3">
                  <BiLogoLinkedin
                    size={24}
                    className="group-hover/iconhover:animate-toTopFromBottom"
                  />
                </div>
                <div className="bg-slate-600 overflow-hidden group/iconhover p-3">
                  <BiLogoYoutube
                    size={24}
                    className="group-hover/iconhover:animate-toTopFromBottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <FooterSub />
    </>
  );
}
