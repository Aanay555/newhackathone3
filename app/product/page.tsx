import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="container mx-auto px-2  mt-10">
      {/* Breadcrumb Navigation */}
      <div className="flex gap-2 items-center text-sm sm:text-base mb-8">
        <Link className="text-gray-500 hover:underline" href={"/"}>
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <Link className="text-gray-700 font-medium hover:underline" href={"/product"}>
          Products
        </Link>
      </div>

      {/* All Products Section */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          <ProductCard image="/chair1.png" title="Comfy Chair" price="20" />
          <ProductCard image="/chair2.png" title="Comfy Chair" price="50" />
          <ProductCard image="/chair3.png" title="Orange Chair" price="30" />
          <ProductCard image="/chair4.png" title="Library Chair" price="20" />
          <ProductCard image="/table-set.png" title="Stylish Chair" price="50" />
          <ProductCard image="/chair3.png" title="Relax Chair" price="30" />
          <ProductCard image="/office-chair.png" title="Elegant Chair" price="30" />
          <ProductCard image="/chair2.png" title="Stylish Chair" price="50" />
          <ProductCard image="/brown-chair.png" title="Relax Chair" price="30" />
          <ProductCard image="/chair4.png" title="Elegant Chair" price="30" />
          <ProductCard image="/chair2.png" title="Stylish Chair" price="50" />
          <ProductCard image="/desk-chair.png" title="Relax Chair" price="30" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Email Address..."
              className="px-4 py-2 rounded border border-gray-300 w-full sm:w-96 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Follow Products and Discounts on Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center pb-6">
            <Image
              src="/table-set.png"
              alt="Table Set"
              width={200}
              height={200}
              className="rounded shadow-md mx-auto"
            />
            <Image
              src="/brown-chair.png"
              alt="Brown Chair"
              width={200}
              height={200}
              className="rounded shadow-md mx-auto"
            />
            <Image
              src="/pink-chair.png"
              alt="Pink Chair"
              width={200}
              height={200}
              className="rounded shadow-md mx-auto"
            />
            <Image
              src="/white-chair.png"
              alt="White Chair"
              width={200}
              height={200}
              className="rounded shadow-md mx-auto"
            />
            <Image
              src="/office-chair.png"
              alt="Office Chair"
              width={200}
              height={200}
              className="rounded shadow-md mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
