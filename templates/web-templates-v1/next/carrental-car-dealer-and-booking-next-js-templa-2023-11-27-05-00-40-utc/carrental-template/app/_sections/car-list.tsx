"use client";
import React from "react";
import Link from "next/link";
import SectionWrapper from "./section-wrapper";
import SectionTitle from "./section-title";
import CarCard from "./car-card";
import { Button } from "@/components/ui/button";

export default function CarList({ count }: { count?: number }) {
  return (
    <SectionWrapper>
      <SectionTitle
        title={"List of Our Cars"}
        subtitle={"All types of cars for every occasion"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
        <CarCard count={count && count} />
      </div>
      <div className="mt-6 lg:mt-12 text-center">
        <Link href="/cars">
          <Button className="bg-orange-600 rounded-none py-5 px-6">
            View All Cars
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
