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
                  </div>

                  {/* service request */}
                  <div className="w-full mt-6">
                    <Label className="flex mb-3 text-2xl" htmlFor="service">
                      I am interested in
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-tertiary">
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="ui-design">UI/UX Design</SelectItem>
                        <SelectItem value="content-writing">
                          Content Writing
                        </SelectItem>
                        <SelectItem value="social-media">
                          Social Media
                        </SelectItem>
                      </SelectContent>
                    </Select>
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
