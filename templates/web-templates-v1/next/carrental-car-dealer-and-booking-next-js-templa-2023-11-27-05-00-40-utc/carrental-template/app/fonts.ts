import { Alegreya, Source_Sans_3 } from "next/font/google";

export const body_font = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--sans-font",
  display: "swap",
});

export const heading_font = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--alegreya-font",
  display: "swap",
});
