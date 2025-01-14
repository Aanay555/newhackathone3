import Image from "next/image";

const CategoryCard = ({ image, title, count }: { image: string; title: string; count: string }) => {
    return (
      <div className="flex items-center space-x-4 border p-4 rounded-md">
        <Image src={image} alt={title} className="w-16 h-16 object-cover rounded-md" />
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-gray-600">{count} Products</p>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  