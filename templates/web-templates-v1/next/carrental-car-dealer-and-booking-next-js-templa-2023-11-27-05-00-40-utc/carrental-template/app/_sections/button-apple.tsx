import React from "react";
import Link from "next/link";
import { TfiApple } from "react-icons/tfi";

interface Props {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  link: string;
}
export default function AppleButton(props: Props) {
  const {
    bgColor = "transparent",
    borderColor = "border-slate-500",
    textColor = "slate-500",
    link = "#",
  } = props;
  return (
    <div>
      <Link href={link}>
        <div
          className={`flex gap-2 bg-${bgColor} border py-1 px-4 items-center h-[48px] ${borderColor}`}
        >
          <TfiApple
            size={28}
            className={`${textColor} stroke-${textColor}`}
            color={`${textColor}`}
          />
          <div>
            <p className={`text-${textColor} text-xs font-light leading-0`}>
              available on the
            </p>
            <p className={`text-${textColor} text-xl leading-0 -mt-2`}>
              App Store
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
