import HeaderLogo from "@/components/HeaderLogo";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Socials from "./Socials";
import NavLinks from "./NavLinks";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        {/* Glass Effect Added Here */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg shadow-black/20 py-2 sm:py-4 rounded-b-4xl">
          <div className="flex justify-between items-center px-6">
            {/* logo */}
            <HeaderLogo />

            {/* nav mbl Use shadcn sheet */}
            <Sheet>
              <SheetTrigger className="cursor-pointer text-white">
                {/* white colour  */}
                <img
                  className="invert"
                  src="assets/menu-4-fill.png"
                  alt="hamburger icon"
                />
              </SheetTrigger>

              <SheetContent
                className="bg-primary flex justify-between items-center py-4"
                side="left"
              >
                <SheetHeader>
                  <SheetTitle>
                    {/* Logo  */}
                    <HeaderLogo />
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation Menu
                  </SheetDescription>
                </SheetHeader>

                <NavLinks containerStyles="flex p-5 uppercase" />

                <div>
                  {/* Download CV Btn  */}
                  <a
                    href="/assets/M.Umair Ali.pdf"
                    target="_blank"
                    download="Umair_Ali_CV.pdf"
                    className="min-w-full flex justify-center md:min-w-0 pb-6"
                  >
                    <div className="btn btn-lg btn-tertiary max-w-15 gap-2 flex items-center">
                      <span>Download CV</span>
                      <Download size={20} />
                    </div>
                  </a>

                  <div className="">
                    <Socials
                      containerStyles="flex-x-center gap-3 mb-4"
                      iconStyles="bg-accent hover:bg-accent/50 p-2 rounded-full cursor-pointer  transition-all"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
