import { NextPage } from "next";
import AboutSection from '../components/aboutSection';
import AboutPopularProduct from "@/app/components/AboutPopularProduct";
import Image from "next/image";
import Link from "next/link";

const About: NextPage = () => (
  <div>
    
    {/* Breadcrumb */}
    <div className="flex gap-3 mx-5 mt-5 lg:mx-24 lg:mt-16 lg:mb-10">
      <Link className="text-gray-500 hover:text-teal-600" href="/">
        Home
      </Link>
      <p>/</p>
      <Link className="text-gray-800" href="/about">
        About
      </Link>
    </div>

    {/* About Section */}
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-teal-600 text-white p-12 rounded-lg flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate
            your comfort. Specializing in ergonomic design, premium materials, and modern
            aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="bg-teal-700 hover:bg-teal-800 px-6 py-2 rounded">
            View Collection
          </button>
        </div>
        <div className="bg-gray-200 rounded-lg flex items-center justify-center">
          <Image
            src="/ImageBlock.png"
            alt="chair"
            width={619}
            height={478}
            className="w-full h-auto max-w-[619px] max-h-[478px]"
          />
        </div>
      </div>
    </div>

    <AboutSection />
    <AboutPopularProduct />
  </div>
);

export default About;
