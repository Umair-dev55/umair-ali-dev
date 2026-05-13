import Gradiant from "@/components/Gradiant";
import "./globals.css";

import { Cinzel } from "next/font/google";
import RectangleTransition from "@/components/RectangleTransition";
import PageTransition from "@/components/PageTransition";
import MainNav from "@/components/MainNav";
import Header from "@/components/Header";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // multiple weights available
  display: "swap",
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
      className={`${cinzel.variable} h-full antialiased overflow-hidden relative`}
    >
      <body className="min-h-full flex flex-col">
        <Gradiant />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="text-[18px] hidden 2xl:flex  w-[285px] h-screen bg-secondary ">
              <MainNav />
            </div>
            <div className="w-full overflow-hidden px-[15px] mx-auto max-w-[1130px] h-screen">
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
