
"use client";
import React, {useState} from "react";
import Link from "next/link";
import { GiMagnifyingGlass } from "react-icons/gi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SearchBar() {
  const [date, setDate] = useState<Date>();
  const [dateEnd, setDateEnd] = useState<Date>();
  return (
    <div className="grid md:flex gap-3 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-white">
        <Select>
          <SelectTrigger className="bg-white color-text min-w-[200px]">
            <SelectValue placeholder="Pick up location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Location 1</SelectItem>
            <SelectItem value="dark">Location 2</SelectItem>
            <SelectItem value="system">Location 3</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-white color-text min-w-[200px]">
            <SelectValue placeholder="Drop off location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Location 1</SelectItem>
            <SelectItem value="dark">Location 2</SelectItem>
            <SelectItem value="system">Location 3</SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild className="bg-white color-text">
            <Button
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a start date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild className="bg-white color-text">
            <Button
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal",
                !dateEnd && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateEnd ? format(dateEnd, "PPP") : <span>Pick a drop off date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateEnd}
              onSelect={setDateEnd}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button asChild className="bg-brand hover:bg-cyan-500">
        <Link href="/login">
          <GiMagnifyingGlass
            className="text-white"
            aria-label="Search database"
          />
        </Link>
      </Button>
    </div>
  );
}
