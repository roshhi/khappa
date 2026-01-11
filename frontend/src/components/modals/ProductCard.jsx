import { Package } from "lucide-react";
import { NavLink } from "react-router";

export default function ProductCard({
  id,
  image,
  name,
  description,
  count,
  price,
  category_title,
}) {
  return (
    <NavLink 
    to={`/categories/product/${id}`} 
    state={{ id,image,name,description,price,category_title}}
    className="no-underline">
        <div className="w-[90vw] sm:w-[45vw] lg:w-[30vw] xl:max-w-[400px] rounded-3xl bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 border-b-3 border-white hover:border-b-black">
            {/* Image Section */}
            <div className="relative">
                <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm shadow-md">
                <Package className="w-4 h-4" />
                <span> In Stock (150) </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900">
                {name}
                </h2>
                <p className="text-slate-500 mt-2">
                {description}
                </p>
                <p className="text-lg font-semibold text-slate-900 mt-4">
                  Price: ${price}
                </p>
            </div>
        </div>
    </NavLink>

  );
}
