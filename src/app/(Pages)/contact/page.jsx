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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendEmail } from "@/lib/resend";

const contact = () => {
  const handleSend = async (formData) => {
    const result = await sendEmail(formData);
    if (result.success) {
      alert("Your message has been sent successfully!");
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };
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
              <div className="flex-1 xl:w-[600px] flex flex-col gap-4 lg:gap-8">
                <div className="flex items-center text-3xl xl:text-4xl font-bold">
                  Let's Work Together
                  <HiOutlineArrowLongRight className="ml-2" />
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail className="text-accent" />
                  <a href="mailto:[umair.dev55@gmail.com]">
                    umair.dev55@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlinePhone className="text-accent" />
                  <a href="tel:+923086754944">+92 308 6754 944</a>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin className="text-accent" />
                  <a href="https://maps.app.goo.gl/P1i84yUu6m93y67c7">
                    Lahore, Pakistan
                  </a>
                </div>
              </div>
              {/* form */}
              <div className="flex-1 w-full">
                <form className="w-full" action={handleSend}>
                  <div className="flex flex-col gap-2 lg:gap-4 w-full">
                    {/* Name Row */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
                      {/* first name */}
                      <div className="w-full">
                        <Label className="flex mb-2" htmlFor="firstName">
                          First Name{" "}
                          <span className="inline text-accent">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First name"
                          required
                          className=""
                        />
                      </div>
                      {/* last name */}
                      <div className="w-full relative z-20">
                        <Label className="flex mb-2" htmlFor="user_last_name">
                          Last Name{" "}
                          <span className="inline text-accent">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="user_last_name"
                          name="lastName"
                          placeholder="Last name"
                          required
                          className="relative z-20"
                        />
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="w-full">
                      <Label className="flex mb-2" htmlFor="email">
                        Email <span className="inline text-accent">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="youremail@gmail.com"
                        required
                        className=""
                      />
                    </div>
                    {/* select  */}
                    <div className="w-full">
                      <Label className="flex mb-2" htmlFor="name">
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
                          <SelectItem className="text-sm" value="web">
                            Web Development
                          </SelectItem>
                          <SelectItem className="text-sm" value="ui/ux">
                            UI & UX Design
                          </SelectItem>
                          <SelectItem className="text-sm" value="wordpress">
                            Wordpress Development
                          </SelectItem>
                          <SelectItem className="text-sm" value="graphic">
                            Graphic Designing
                          </SelectItem>
                          <SelectItem className="text-sm" value="other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Textarea  */}
                    <div className="w-full">
                      <Label className="flex mb-2" htmlFor="message">
                        Message <span className="inline text-accent">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        required
                        className=" h-30 bg-tertiary/50 border-white/30 text-white px-6 data-placeholder:text-white/50 focus:ring-accent/50"
                      />
                    </div>
                    {/* submit button */}
                    <div className="flex xl:justify-start lg:justify-center justify-center w-full">
                      <button className="btn btn-lg btn-accent" type="submit">
                        Send Message
                        <HiOutlineArrowLongRight className="ml-2" />
                      </button>
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
