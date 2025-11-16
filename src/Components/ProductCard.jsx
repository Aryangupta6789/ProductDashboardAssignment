import { Heart } from "lucide-react";

export default function ProductCard({ products, openModal, isFavorite, toggleFavorite }) {
  return (
    <div
      className="
        relative
        bg-white dark:bg-[#2c2c2e] 
        border border-[#e5e5e7] dark:border-[#3a3a3c]
        p-5 rounded-2xl 
        shadow-sm hover:shadow-md 
        hover:-translate-y-1 transition-all cursor-pointer
        text-gray-900 dark:text-[#f5f5f7]
        flex flex-col
      "
      onClick={() => openModal(products)}
    >

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(products);
        }}
        className="
          absolute top-3 right-3 
          w-9 h-9 rounded-full 
          bg-white dark:bg-[#3a3a3c]
          border border-[#e5e5e7] dark:border-[#3a3a3c]
          shadow-sm 
          flex items-center justify-center
          hover:scale-110 transition
        "
      >
        <Heart
          size={20}
          className={
            isFavorite
              ? "fill-red-500 text-red-500"
              : "text-gray-600 dark:text-gray-300"
          }
        />
      </button>

      {/* IMAGE */}
      <img
        src={products.image}
        alt={products.title}
        className="w-full h-48 object-contain mb-4 flex-shrink-0"
      />

      {/* TITLE - FIX HEIGHT */}
      <h4 className="
        font-semibold text-[15px] mb-2 
        h-10 overflow-hidden text-ellipsis
      ">
        {products.title}
      </h4>

      {/* CATEGORY */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 capitalize">
        {products.category}
      </p>

      {/* RATING */}
      <div className="flex items-center gap-1 mb-2">
        ⭐
        <span className="text-sm">{products.rating.rate}</span>
        <span className="text-xs text-gray-400">({products.rating.count})</span>
      </div>

      {/* PRICE - STICKS AT BOTTOM */}
      <p className="text-green-600 dark:text-green-400 font-bold text-lg mt-auto">
        ₹ {products.price}
      </p>

    </div>
  );
}
