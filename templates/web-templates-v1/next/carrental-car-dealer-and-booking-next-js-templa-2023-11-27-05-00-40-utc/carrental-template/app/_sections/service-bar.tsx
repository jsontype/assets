"use client";
import React from "react";
import Link from "next/link";
import { MdMoneyOffCsred } from "react-icons/md";
import { RiCaravanLine } from "react-icons/ri";
import { BiSolidCarCrash } from "react-icons/bi";
import { IoCompassOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";

export default function ServiceBar() {
  return (
    <section className="bg-gray-100 py-2 lg:py-4 hidden lg:block">
      <div className="max-w-6xl mx-auto content-center">
        <div className="flex justify-between divide-x">
          <div className="flex gap-2 px-8">
            <RiCaravanLine
              size={24}
              className="fill-cyan-500 stroke-cyan-500"
            />
            <h3 className="capitalize">
              <Link href="/hot-deals" className="hover:text-gray-600">
                Door step delivery
              </Link>
            </h3>
          </div>
          <div className="flex gap-2 px-8">
            <FaHandHoldingDollar
              size={24}
              className="fill-cyan-500 stroke-cyan-500"
            />
            <h3 className="capitalize">
              <Link href="/hot-deals" className="hover:text-gray-600">
                Best price guarantee
              </Link>
            </h3>
          </div>
          <div className="flex gap-2 px-8">
            <IoCompassOutline
              size={24}
              className="fill-cyan-500 stroke-cyan-500"
            />
            <h3 className="capitalize">
              <Link href="/hot-deals" className="hover:text-gray-600">
                Go anywhere
              </Link>
            </h3>
          </div>
          <div className="flex gap-2 px-8">
            <MdMoneyOffCsred
              size={24}
              className="fill-cyan-500 stroke-cyan-500"
            />
            <h3 className="capitalize">
              <Link href="/hot-deals" className="hover:text-gray-600">
                No hidden charges
              </Link>
            </h3>
          </div>
          <div className="flex gap-2 px-8">
            <BiSolidCarCrash
              size={24}
              className="fill-cyan-500 stroke-cyan-500"
            />
            <h3 className="capitalize">
              <Link href="/hot-deals" className="hover:text-gray-600">
                Damage insurance
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
