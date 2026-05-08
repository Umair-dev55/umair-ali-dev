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
import { MoveUpRight } from "lucide-react";
const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6">
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
              className="bg-primary flex justify-between items-center py-16"
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
              <NavLinks />
              <div>
                {/* Lets Talh btn  */}
                <button className="min-w-full flex-x-center md:min-w-0 pb-6">
                  <div className="btn btn-lg btn-tertiary max-w-15  gap-2 ">
                    <span className="">Download CV </span>
                    <MoveUpRight />
                  </div>
                </button>
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
  );
};

export default Header;
