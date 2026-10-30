import React from "react";
import PageTitle from "../_sections/page-title";
import SectionWrapper from "../_sections/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const title = "Frequent Asked Questions";
const desc = "Page description";

export async function generateMetadata() {
  return {
    title: title,
    description: desc,
  };
}

export default function Faq() {
  return (
    <>
      <PageTitle title={title} />
      <SectionWrapper>
        <div className="max-w-xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Pickup and Drop-off Locations. Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Check if the rental agency has convenient pickup and drop-off
                locations. Airport locations tend to be more expensive than
                off-airport locations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Is there have any Additional Fees?
              </AccordionTrigger>
              <AccordionContent>
                No hidden fees. There we can conpensate any additional fees,
                such as those for early returns, late returns, one-way rentals,
                tolls, and cleaning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                What about Driving Restrictions. Do you have any?
              </AccordionTrigger>
              <AccordionContent>
                Check for any driving restrictions, such as crossing state or
                national borders, and adhere to them to avoid additional fees.
                If you need child seats, GPS, or other equipment, inquire about
                availability and costs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                What does cover the Insurance?
              </AccordionTrigger>
              <AccordionContent>
                Check if your existing auto insurance or credit card covers
                rental car insurance. If not, you may need to purchase insurance
                through the rental agency, which can add to the cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Pickup and Drop-off Locations. Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Check if the rental agency has convenient pickup and drop-off
                locations. Airport locations tend to be more expensive than
                off-airport locations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                Is there have any Additional Fees?
              </AccordionTrigger>
              <AccordionContent>
                No hidden fees. There we can conpensate any additional fees,
                such as those for early returns, late returns, one-way rentals,
                tolls, and cleaning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">
                What about Driving Restrictions. Do you have any?
              </AccordionTrigger>
              <AccordionContent>
                Check for any driving restrictions, such as crossing state or
                national borders, and adhere to them to avoid additional fees.
                If you need child seats, GPS, or other equipment, inquire about
                availability and costs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold">
                What does cover the Insurance?
              </AccordionTrigger>
              <AccordionContent>
                Check if your existing auto insurance or credit card covers
                rental car insurance. If not, you may need to purchase insurance
                through the rental agency, which can add to the cost.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="grid gap-6 mt-4">
            <h3 className="text-xl text-center mt-10">
              Can&apos;t find what you are looking for?
            </h3>
            <div className="flex gap-4 justify-center">
              <Button
                size={"lg"}
                variant="outline"
                className="rounded-full border border-green-700 text-green-800"
              >
                Email your queries
              </Button>
              <Button
                size={"lg"}
                className="rounded-full text-white bg-orange-600"
              >
                Request to callback
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
