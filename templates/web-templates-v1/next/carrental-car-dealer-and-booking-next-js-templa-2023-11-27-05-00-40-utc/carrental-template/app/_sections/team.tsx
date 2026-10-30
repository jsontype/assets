"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./section-title";
import { AiOutlineLink } from "react-icons/ai";
import SectionWrapper from "./section-wrapper";

const data = [
  {
    name: "Shalini Menon",
    position: "Manager",
    profile: "/team-1.jpg",
    link: "https://google.com",
  },
  {
    name: "David John",
    position: "Sales",
    profile: "/team-2.jpg",
    link: "https://google.com",
  },
  {
    name: "Clifi Mathew",
    position: "Director",
    profile: "/team-3.jpg",
    link: "https://google.com",
  },
  {
    name: "Twanda Costas",
    position: "Marketer",
    profile: "/team-4.jpg",
    link: "https://google.com",
  },
];

function TeamMembers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((member, index) => (
        <div className="relative group/item text-center" key={index}>
          <Link href={member.link}>
            <div className="relative aspect-[1/1]">
              <Image
                className="object-cover"
                src={member.profile}
                fill
                sizes="(max-width: 768px) 420px, 270px"
                alt={member.name}
              />
              <div className="flex justify-center flex-col absolute w-full h-full top-0 left-0 hover:backdrop-blur-sm hover:backdrop-brightness-50 invisible group-hover/item:visible">
                <div className="text-center translate-y-2 opacity-0 transition ease-linear delay-300 group-hover/item:translate-y-0 group-hover/item:opacity-100">
                  <AiOutlineLink size={24} className="text-white w-full" />
                </div>
              </div>
            </div>
          </Link>
          <h4 className="mt-3 text-lg">{member.name}</h4>
          <p>{member.position}</p>
        </div>
      ))}
    </div>
  );
}

export default function Team() {
  return (
    <SectionWrapper>
      <SectionTitle
        title={"Team"}
        subtitle={"Check out our customer support team"}
      />
      <p className="mt-4 mb-8 text-center max-w-3xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the when an unknown printer took.
      </p>
      <TeamMembers />
    </SectionWrapper>
  );
}
