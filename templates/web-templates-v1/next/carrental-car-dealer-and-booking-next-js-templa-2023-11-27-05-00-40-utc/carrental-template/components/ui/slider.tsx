import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  min: number;
  max: number;
  step: number;
  value: any;
  onValueChange: any;
  defaultValue?: {};
}

const Slider = React.forwardRef(
  ({
    className,
    min,
    max,
    step,
    value,
    onValueChange,
    defaultValue,
    ...props
  }: Props) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    const handleValueChange = (newValues: any) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute text-center"
              style={{
                left: `calc(${((value - min) / (max - min + 7)) * 100}% + 3px)`,
                top: `13px`,
              }}
            >
              <span className="text-xs">{value}</span>
            </div>
            <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
