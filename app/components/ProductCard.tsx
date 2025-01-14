import Image from "next/image";

const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={312} // Specify the width
        height={377} // Specify the height
        className="object-cover w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-blue-600 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
