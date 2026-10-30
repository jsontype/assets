"use client";
import Link from "next/link";

export const metadata = {
  title: "Page not found"
};

export default function Custom404() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(/car-404.jpg)` }}
    >
      <article className="max-w-7xl mx-auto py-24 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div>
            <h1 className="text-[72px] md:text-[96px] xl:text-[144px]">404</h1>
            <p className="text-[20px] md:text-[28px] xl:text-[36px]">
              Look like you are lost ...
            </p>
            <Link href="/">
              <button className="bg-orange-600 rounded-none mt-4 p-4 text-lg">
                Go Back Home Page
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
