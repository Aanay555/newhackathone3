import { NextPage } from "next";
// import Image from "next/image";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

const Shop: NextPage = () => (
  <div>
    <div className="flex gap-3 mr-4 mt-5 lg:mx-24 lg:mt-16 lg:mb-10">
      <Link className="text-gray-500" href={"/"}>
        Home
      </Link>
      <p>/</p>
      <Link href={"/shop"}>Shop</Link>
    </div>

    <header className="bg-gray-200 p-10 text-center">
      <h1 className="text-4xl font-semibold">Shop Our Collection</h1>
    </header>

    <section className="my-10 px-5">
      <h2 className="text-2xl font-semibold">Our Products</h2>
      <div className="grid grid-cols-1 mr-6 ml-6 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {/* <Image src="/chair1.png" alt="Chair" width={312} height={377} /> */}
        <ProductCard title="Library Stool Chair" price="20" image="/chair1.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair2.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair3.png" />
        <ProductCard title="Library Stool Chair" price="20" image="/chair4.png" />
      </div>
    </section>
  </div>
);

export default Shop;
