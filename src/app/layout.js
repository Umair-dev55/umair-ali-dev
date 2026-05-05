import "./globals.css";
import MainNav from "./Components/MainNav";
import Header from "./Components/Header";
import PageTransition from "./Components/PageTransition";
import RectangleTransition from "./Components/RectangleTransition";
import { Playfair_Display, Inter } from "next/font/google";

import { Cinzel } from "next/font/google";
import Gradiant from "./Components/Gradiant";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // multiple weights available
  display: "swap",
});
const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "900"], // Luxury feel ke liye heavy weights
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  style: ["normal", "italic"], // Italic bhi support karega
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "Umair Ali - Portfolio",
  description:
    "React/Next.js Developer Experienced in building responsive and user-friendly web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
         ${cinzel.variable} ${playfair.variable} ${inter.variable}
        h-full antialiased overflow-hidden relative`}
    >
      <body className="min-h-full flex flex-col">
        <Gradiant />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="text-[18px] hidden 2xl:flex  w-[285px] h-screen bg-secondary justify-center items-center ">
              <MainNav />
            </div>
            <div className="w-full  px-[15px] mx-auto max-w-[1130px] h-screen">
              <header>
                <Header />
              </header>
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
