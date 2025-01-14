import React from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import ContactSection from "../components/contactSection";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
      <div className="flex gap-3 mx-5 mt-5 lg:mx-24 lg:mt-16 lg:mb-10">
        <Link className="text-gray-500" href={"/"}>
          Home
        </Link>
        <p>/</p>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <h1 className="font-semibold text-4xl text-center sm:text-3xl">
        Get In Touch With Us
      </h1>

      <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm px-4 sm:px-0">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[60px]">
        <div className="flex flex-col space-y-8 px-4 sm:px-6 lg:px-10">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-black h-6 mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
              >
                Address
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhone className="text-black h-6 mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
              >
                Phone
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <GoClockFill className="text-black h-6 mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
              >
                Working Time
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 mb-6 w-full lg:w-auto rounded-lg shadow-md">
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                className="w-full h-[55px] p-4 border border-[#9F9F9F] rounded-[10px] mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                className="w-full h-[55px] p-4 border border-[#9F9F9F] rounded-[10px] mt-2"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is an optional"
                className="w-full h-[55px] p-4 border border-[#9F9F9F] rounded-[10px] mt-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I’d like to ask about"
                className="w-full h-[120px] p-4 border border-[#9F9F9F] rounded-[10px] mt-2"
                rows={4}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full h-[45px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Page;
