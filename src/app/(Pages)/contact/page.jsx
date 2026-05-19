"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex sm:flex-y-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full px-4">
        <div className="w-full h-full flex flex-col items-center xl:justify-center">
          <div className="w-full">
            <div className="flex flex-col xl:flex-row gap-6 ">
              {/* info text */}
              <div>info text</div>
              {/* form */}
              <div className="flex-1 w-full">
                <form className="w-full">
                  <div className="flex flex-col gap-6 lg:gap-8 w-full">
                    {/* Name Row */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
                      {/* first name */}
                      <div className="w-full">
                        <Label className="flex mb-3" htmlFor="firstName">
                          First Name{" "}
                          <span className="inline text-accent">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          placeholder="First name"
                          required
                          className=""
                        />
                      </div>
                      {/* last name */}
                      <div className="w-full">
                        <Label className="flex mb-3" htmlFor="lastName">
                          Last Name{" "}
                          <span className="inline text-accent">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="w-full">
                      <Label className="flex mb-3" htmlFor="email">
                        Email <span className="inline text-accent">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                        required
                        className=""
                      />
                    </div>
                    {/* select  */}
                    <div className="w-full">
                      <Label className="flex mb-3" htmlFor="name">
                        i' m Intrested in{" "}
                        <span className="inline text-accent">*</span>
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger
                          id="service"
                          className="w-full !h-12 bg-tertiary/50 border-white/30 text-white px-6 data-placeholder:text-white/50 focus:ring-accent/50"
                        >
                          <SelectValue placeholder="Choose Here" />
                        </SelectTrigger>
                        <SelectContent
                          alignItemWithTrigger={false}
                          className="bg-tertiary border-white/30 text-white shadow-xl min-w-[--anchor-width] p-2"
                        >
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="uiux">UI & UX Design</SelectItem>
                          <SelectItem value="wordpress">
                            Wordpress Development
                          </SelectItem>
                          <SelectItem value="graphic">
                            Graphic Designing
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
