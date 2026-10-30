import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiEnvelope,
  BiHomeAlt,
  BiTimeFive,
  BiPhone,
  BiLogoAmazon,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoSpotify,
} from "react-icons/bi";

function WidgetTitle({ title }: { title: string }) {
  return <h3 className="text-lg font-bold uppercase mb-4">{title}</h3>;
}

export default function Sidebar() {
  return (
    <aside className="sidebar mh-6 mt-12 md:mt-0 grid gap-8">
      <div className="widget bg-cyan-50 p-8">
        <WidgetTitle title="Recent posts" />
        <div className="grid gap-4">
          <div>
            <div className="flex gap-3">
              <Image
                src={"/car-11.jpg"}
                className="rounded"
                width={80}
                height={80}
                alt="Image alt"
              />
              <div>
                <p className="text-gray-700 text-sm">April 3, 2023</p>
                <Link href="/" className="text-gray-700 font-semibold">
                  Mustang is the best muscle car for our generation
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-cyan-100" />
          <div>
            <div className="flex gap-3">
              <Image
                src={"/car-9.jpg"}
                className="rounded"
                width={80}
                height={80}
                alt="Image alt"
              />
              <div>
                <p className="text-gray-700 text-sm">April 3, 2023</p>
                <Link href="/" className="text-gray-700 font-semibold">
                  Mustang is the best muscle car for our generation
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-cyan-100" />
          <div>
            <div className="flex gap-3">
              <Image
                src={"/car-7.jpg"}
                className="rounded"
                width={80}
                height={80}
                alt="Image alt"
              />
              <div>
                <p className="text-gray-700 text-sm">April 3, 2023</p>
                <Link href="/" className="text-gray-700 font-semibold">
                  Mustang is the best muscle car for our generation
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-cyan-100" />
          <div>
            <div className="flex gap-3">
              <Image
                src={"/car-8.jpg"}
                className="rounded"
                width={80}
                height={80}
                alt="Image alt"
              />
              <div>
                <p className="text-gray-700 text-sm">April 3, 2023</p>
                <Link href="/" className="text-gray-700 font-semibold">
                  Mustang is the best muscle car for our generation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget bg-cyan-50 p-8">
        <WidgetTitle title="Address" />
        <address className="grid gap-4">
          <div>
            <div className="flex gap-3">
              <BiHomeAlt size={"32"} />
              <p>
                Sunray road, Billoread Street 2219-11C. Crowky Town, Your
                Country.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <BiPhone size={"20"} />
              <p>(305) 533-1122, (305) 112-7788</p>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <BiEnvelope size={"20"} />
              <a href="mailto:johndoe@mail.com">johndoe@mail.com</a>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <BiTimeFive size={"20"} />
              <p>
                Monday - Friday: 09:00 - 18:00 <br />
                Saturday, Sunday: Closed
              </p>
            </div>
          </div>
        </address>
      </div>
      <div className="widget bg-cyan-50 p-8">
        <WidgetTitle title="Social links" />
        <div className="flex gap-3">
          <a href="/">
            <div className="p-3 bg-teal-600 hover:bg-teal-500 transform text-white rounded-full">
              <BiLogoFacebook size={16} />
            </div>
          </a>
          <a href="/">
            <div className="p-3 bg-teal-600 hover:bg-teal-500 transform text-white rounded-full">
              <BiLogoAmazon size={16} />
            </div>
          </a>
          <a href="/">
            <div className="p-3 bg-teal-600 hover:bg-teal-500 transform text-white rounded-full">
              <BiLogoInstagram size={16} />
            </div>
          </a>
          <a href="/">
            <div className="p-3 bg-teal-600 hover:bg-teal-500 transform text-white rounded-full">
              <BiLogoYoutube size={16} />
            </div>
          </a>
          <a href="/">
            <div className="p-3 bg-teal-600 hover:bg-teal-500 transform text-white rounded-full">
              <BiLogoSpotify size={16} />
            </div>
          </a>
        </div>
      </div>
      <div className="widget bg-cyan-50 p-8">
        <WidgetTitle title="Tags" />

        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
            <Link
              key={size}
              href="#"
              className="px-3 py-1 text-sm rounded-full transform bg-teal-600 text-white hover:text-white hover:bg-teal-500"
            >
              Tag {size}
            </Link>
          ))}
        </div>
      </div>
      <div className="widget bg-cyan-50 p-8">
        <WidgetTitle title="About" />
        <p>
          Welcome to our Car rental demo website. We search thousands of
          destinations and compare thousands of car hire deals to help you find
          your perfect drive at a low price.
        </p>
      </div>
    </aside>
  );
}
