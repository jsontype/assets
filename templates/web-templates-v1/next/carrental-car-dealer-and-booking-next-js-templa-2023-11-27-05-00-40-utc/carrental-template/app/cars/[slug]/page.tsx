import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "../../_sections/page-title";
import SectionTitle from "@/app/_sections/section-title";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import SectionWrapper from "@/app/_sections/section-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const title = "Choose Your Car";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export default function Single() {
  return (
    <>
      <PageTitle title={title} />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-16">
          <div>
            <SectionTitle
              title="Do You Require A Car?"
              subtitle="Get In Touch With Us"
              align="left"
            />
            <p>
              We offer you to choose from a wide variety of car classes new
              high-quality vehicles meeting your needs and budget best. Renting
              a car for your business enterprise or vacation, we have a wide
              range of luxury, sports, and hybrid vehicles available to meet
              your every car rental need.
            </p>
            <div className="grid grid-cols-2 gap-1 mt-8">
              <div className="flex gap-4">
                <MdSupportAgent size={"44"} className="fill-orange-500" />
                <div>
                  <p>ONLINE CHAT NOW</p>
                  <Link className="text-2xl" href="tel:+123-567-8908">
                    +123-567-8908
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <HiOutlineDevicePhoneMobile
                  size={"44"}
                  className="stroke-orange-500"
                />
                <div>
                  <p>CALL US</p>
                  <Link className="text-2xl" href="tel:+123-567-8908">
                    +123-567-8908
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle
              title="Ride Details / Distance"
              subtitle="Complete this form and we'll contact you as soon as possible"
              align="left"
            />
            <form action="/">
              <div className="grid gap-4">
                <Select>
                  <SelectTrigger className="bg-white color-text min-w-[200px]">
                    <SelectValue placeholder="Select a car" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">BMW</SelectItem>
                    <SelectItem value="dark">Bentley</SelectItem>
                    <SelectItem value="system">Mercedes</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    required
                    name="location"
                    placeholder="Pick up location *"
                  />
                  <Select>
                    <SelectTrigger className="bg-white color-text min-w-[200px]">
                      <SelectValue placeholder="Pick up location *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">00:00 AM</SelectItem>
                      <SelectItem value="option1">01:00 AM</SelectItem>
                      <SelectItem value="option1">02:00 AM</SelectItem>
                      <SelectItem value="option1">03:00 AM</SelectItem>
                      <SelectItem value="option1">04:00 AM</SelectItem>
                      <SelectItem value="option1">05:00 AM</SelectItem>
                      <SelectItem value="option1">06:00 AM</SelectItem>
                      <SelectItem value="option1">07:00 AM</SelectItem>
                      <SelectItem value="option1">08:00 AM</SelectItem>
                      <SelectItem value="option1">09:00 AM</SelectItem>
                      <SelectItem value="option1">10:00 AM</SelectItem>
                      <SelectItem value="option1">11:00 AM</SelectItem>
                      <SelectItem value="option1">12:00 AM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    required
                    name="location_drop"
                    placeholder="Drop off up location *"
                  />

                  <Select>
                    <SelectTrigger className="bg-white color-text min-w-[200px]">
                      <SelectValue placeholder="Drop off location *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">00:00 AM</SelectItem>
                      <SelectItem value="option1">01:00 AM</SelectItem>
                      <SelectItem value="option1">02:00 AM</SelectItem>
                      <SelectItem value="option1">03:00 AM</SelectItem>
                      <SelectItem value="option1">04:00 AM</SelectItem>
                      <SelectItem value="option1">05:00 AM</SelectItem>
                      <SelectItem value="option1">06:00 AM</SelectItem>
                      <SelectItem value="option1">07:00 AM</SelectItem>
                      <SelectItem value="option1">08:00 AM</SelectItem>
                      <SelectItem value="option1">09:00 AM</SelectItem>
                      <SelectItem value="option1">10:00 AM</SelectItem>
                      <SelectItem value="option1">11:00 AM</SelectItem>
                      <SelectItem value="option1">12:00 AM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-brand p-3">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 px-4 xl:px-0 mb-4">
        <div className="grid gap-2 md:gap-4">
          <div className="relative aspect-[2/3]">
            <Image
              src="/gal-1.jpg"
              fill
              sizes="(max-width:768px) 640px, 720px"
              className="object-cover"
              alt="Gallery Image"
            />
          </div>
          <div className="relative aspect-[1/1]">
            <Image
              src="/gal-2.jpg"
              fill
              sizes="(max-width:768px) 640px, 720px"
              className="object-cover"
              alt="Gallery Image"
            />
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div className="relative aspect-[1/1]">
            <Image
              src="/gal-3.jpg"
              fill
              sizes="(max-width:768px) 640px, 720px"
              className="object-cover"
              alt="Gallery Image"
            />
          </div>
          <div className="relative aspect-[2/3]">
            <Image
              src="/gal-4.jpg"
              fill
              sizes="(max-width:768px) 640px, 720px"
              className="object-cover"
              alt="Gallery Image"
            />
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div className="relative aspect-[2/3]">
            <Image
              src="/gal-5.jpg"
              fill
              sizes="(max-width:768px) 640px, 720px"
              className="object-cover"
              alt="Gallery Image"
            />
          </div>
          <div className="relative aspect-[1/1]">
            <Image
              src="/gal-6.jpg"
              fill
              sizes="(max-width:768px) 640px, 720px"
              className="object-cover"
              alt="Gallery Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
