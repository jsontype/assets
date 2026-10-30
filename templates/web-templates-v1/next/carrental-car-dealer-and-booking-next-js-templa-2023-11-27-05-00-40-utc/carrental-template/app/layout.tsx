import "./globals.css";
import { body_font } from "./fonts";
import Header from "./_sections/header";
import Footer from "./_sections/footer";

export const metadata = {
  title: "Car Rental Template",
  description:
    "We search thousands of destinations and compare thousands of car hire deals to help you find your perfect drive at a low price.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={body_font.className}>
        <div className="px-0 xl:px-9 2xl:px-16">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
