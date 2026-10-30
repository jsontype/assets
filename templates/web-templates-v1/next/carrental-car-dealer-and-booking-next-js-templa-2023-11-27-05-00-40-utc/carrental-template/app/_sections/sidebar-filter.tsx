"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface SliderValues {
  min: number;
  max: number;
  step: number;
  val1: number;
  val2: number;
}

function WidgetSlider({
  title = "Slider",
  values,
}: {
  title: string;
  values: SliderValues;
}) {
  const [range, setRange] = useState([values.val1, values.val2]);

  const handleRangeChange = (value: any) => {
    setRange(value);
  };
  return (
    <div className="widget py-6 px-8 mb-4 grid gap-6">
      <h3 className="text-lg">{title}</h3>

      <Slider
        defaultValue={[values.val1, values.val2]}
        max={values.max}
        min={values.min}
        step={values.step}
        value={range}
        onValueChange={handleRangeChange}
      />
    </div>
  );
}

function WidgetSelect({
  title = "Manufacturer",
  list = [],
}: {
  title: string;
  list: string[];
}) {
  return (
    <div className="widget px-8 mb-4 grid gap-6">
      <h3 className="text-lg">{title}</h3>
      <ul className="grid gap-3">
        {list.map((item: any, index: number) => (
          <li className="flex gap-2" key={index}>
            <Checkbox id={item} name="remember" />
            <label
              htmlFor={item}
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SidebarFilter() {
  const manufacturers = [
    "Chrysler",
    "Honda",
    "Buick",
    "Chevrolet",
    "Dodge",
    "Mercedes",
    "BMW",
  ];

  const vehicleTypes = [
    "Economy",
    "Compact",
    "Premium",
    "Sports",
    "SUV",
    "Hatchback",
    "Sedan",
  ];

  const SliderArgs = {
    min: 10,
    max: 100,
    step: 5,
    val1: 30,
    val2: 80,
  };
  return (
    <>
      <div className="flex flex-col gap-6 border">
        <h3 className="py-6 px-8 text-xl bg-cyan-500 text-white">
          Filter Vechiles
        </h3>
        <WidgetSelect title="Manufacturers" list={manufacturers} />
        <WidgetSlider title="Price Range Per Hour ($)" values={SliderArgs} />
        <WidgetSelect title="Vehicle Type" list={vehicleTypes} />
        <div className="py-3 px-8 mb-8">
          <Button className="text-lg rounded-none px-8 py-6 bg-orange-600">
            Search Now
          </Button>
        </div>
      </div>
    </>
  );
}
