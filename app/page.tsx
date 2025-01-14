import { NextPage } from "next";
import ProductCard from "../app/components/ProductCard";
import Image from "next/image";

const Home: NextPage = () => (
  <div>
    {/* Header Section */}
    <header className="relative flex flex-wrap justify-between items-center bg-gray-50 px-6 py-16 lg:px-10 lg:py-20">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-6 lg:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Best Furniture Collection For Your Interior.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore our premium collection of furniture designed to elevate the aesthetic of your living space.
        </p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-md text-lg flex items-center">
          Shop Now
          <span className="ml-2"></span>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/ProductImage.png"
          alt="Chair"
          width={434}
          height={584}
          className="rounded-xl"
        />
      </div>
    </header>

  {/* Logo Section */}
<section className="my-10 px-6 lg:px-10">
  <div className="container mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center py-10">
      <Image
        src="/Logo1.png"
        alt="Zapier logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
      <Image
        src="/Logo2.png"
        alt="Pipedrive logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
      <Image
        src="/Logo3.png"
        alt="CIB Bank logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
      <Image
        src="/Logo4.png"
        alt="Zendesk logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
      <Image
        src="/Logo5.png"
        alt="Burnt Toast logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
      <Image
        src="/Logo6.png"
        alt="PandaDoc logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
      <Image
        src="/Logo7.png"
        alt="Moz logo"
        width={100}
        height={100}
        className="mx-auto h-auto"
      />
    </div>
  </div>
</section>


    {/* Featured Products Section */}
    <section className="my-10 px-6 lg:px-10">
      <h2 className="text-2xl font-semibold mb-5">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <ProductCard title="Library Stool Chair" price="20" image="/chair1.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair2.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair3.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair4.png" />
      </div>
    </section>

    {/* Top Categories Section */}
    <section className="my-10 px-6 lg:px-10">
      <h2 className="text-2xl font-semibold mb-5">Top Categories</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {[{ image: "/office-chair.png", label: "Wing Chair" }, { image: "/table-set.png", label: "Wooden Chair" }, { image: "/desk-chair.png", label: "Desk Chair" }, { image: "/chair4.png", label: "Desk Chair" }]
          .map(({ image, label }, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={label}
                width={380}
                height={380}
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 text-white bg-black bg-opacity-60 rounded-b-lg">
                {label}
              </div>
            </div>
          ))}
           
      </div>
    </section>

  {/* Explore Section */}
<section className="bg-gray-100 py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Large Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src="/chair3.png"
          alt="Large orange chair"
          width={648}
          height={648}
          className="rounded shadow-lg w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Right Grid Section */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        <div>
          <Image
            src="/brown-chair.png"
            alt="Brown tufted chair"
            width={312}
            height={312}
            className="rounded shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <Image
            src="/chair4.png"
            alt="Rustic white chair"
            width={312}
            height={312}
            className="rounded shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <Image
            src="/white-chair.png"
            alt="Gray upholstered chair"
            width={312}
            height={312}
            className="rounded shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div>
          <Image
            src="/white-chair.png"
            alt="Rustic white chair 2"
            width={312}
            height={312}
            className="rounded shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    {/* All Products Section */}
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
      <div className="px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[{ title: "Library Stool Chair", price: "20", img: "/chair1.png" },
            { title: "Library Stool Chair", price: "20", img: "/chair2.png" },
            { title: "Library Stool Chair", price: "20", img: "/chair3.png" },
            { title: "Library Stool Chair", price: "20", img: "/chair4.png" },
            { title: "Desk Chair", price: "20", img: "/desk-chair.png" },
            { title: "Library Chair", price: "50", img: "/liabrarychair.png" },
            { title: "Library Stool", price: "30", img: "/liabrarystool.png" },
            { title: "White Chair", price: "30", img: "/white-chair.png" }]
            .map(({ title, price, img }, index) => (
              <ProductCard key={index} title={title} price={price} image={img} />
            ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
