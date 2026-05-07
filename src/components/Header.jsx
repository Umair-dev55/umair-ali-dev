import HeaderLogo from "@/components/HeaderLogo";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Socials from "./Socials";
const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6">
          {/* logo */}
          <HeaderLogo />
          {/* nav mbl Use shadcn sheet */}
          <Sheet>
            <SheetTrigger className="cursor-pointer ">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              Content Here
              <SheetHeader>
                Sheet Header
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  Sheet
                  <Socials />
                  Description
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
