import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight, BsDashLg } from "react-icons/bs";

export default function Pagination() {
  return (
    <div className="flex gap-2 px-4 md:px-12 xl:px-32 pt-6 sm:pt-10 lg:pt-12 items-center">
      <Link href="#" className="pagination-arrow relative group/nav">
        <BsArrowLeft size={26} />
        <div className="absolute w-7 h-11 -top-2 -left-4 -z-10 transition-all group-hover/nav:left-1 group-hover/nav:bg-gray-300 bg-gray-100"></div>
      </Link>
      <div className="flex-grow"></div>
      <Link href="#" className="text-xl font-bold">
        1
      </Link>
      <BsDashLg />
      <Link href="#" className="text-xl">
        2
      </Link>
      <BsDashLg />
      <Link href="#" className="text-xl">
        3
      </Link>
      <div className="flex-grow"></div>
      <Link href="#" className="pagination-arrow relative group/nav">
        <BsArrowRight size={26} />
        <div className="absolute w-7 h-11 -top-2 -right-4 -z-10 transition-all group-hover/nav:right-1 group-hover/nav:bg-gray-300 bg-gray-100"></div>
      </Link>
    </div>
  );
}
