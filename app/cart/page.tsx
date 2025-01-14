import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex gap-3 mx-5 mt-5 lg:mx-24 lg:mt-16 lg:mb-10 text-sm">
        <Link className="text-gray-500" href={"/"}>
          Home
        </Link>
        <p>/</p>
        <Link className="text-black font-semibold" href={"/cart"}>
          Cart
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium mb-6 pl-3">Bag</h2>

          {/* Cart Item 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4 w-full">
              <div className="w-24 h-24 bg-orange-200 rounded flex-shrink-0">
                <Image
                  src="/brown-chair.png"
                  alt="Library Stool Chair"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex flex-wrap gap-4">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3 text-gray-600">
                  <CiHeart size={20} />
                  <RiDeleteBin6Line size={20} />
                </div>
              </div>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-[16px] font-normal text-[#111111]">MRP: $99</p>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 w-full">
              <div className="w-24 h-24 bg-gray-300 rounded flex-shrink-0">
                <Image
                  src="/chair3.png"
                  alt="Library Stool Chair"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex flex-wrap gap-4">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3 text-gray-600">
                  <CiHeart size={20} />
                  <RiDeleteBin6Line size={20} />
                </div>
              </div>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-[16px] font-normal text-[#111111]">MRP: $99</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">$198.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">$198.00</p>
            </div>
            <button className="w-full h-[60px] rounded-[30px] text-white bg-[#029FAE] hover:bg-[#027F8C] transition duration-300">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
