import React from "react";
import Link from "next/link";
import { PiGooglePlayLogo } from "react-icons/pi";

interface Props {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  link: string;
}

export default function GooglePlayButton(props: Props) {
  const {
    bgColor = "transparent",
    borderColor = "border-slate-500",
    textColor = "slate-500",
    link = "#",
  } = props;

  return (
    <Link href={link}>
      <div
        className={`flex gap-2 bg-${bgColor} border py-2 px-4 items-center h-[48px] ${borderColor}`}
      >
        <PiGooglePlayLogo
          size={28}
          className={`fill-${textColor} stroke-${textColor}`}
          color={`${textColor}`}
        />
        <div>
          <p className={`text-${textColor} text-xs leading-0`}>
            available on the
          </p>
          <p className={`text-${textColor} text-xl leading-0 -mt-2`}>
            Google Play
          </p>
        </div>
      </div>
    </Link>
  );
}
