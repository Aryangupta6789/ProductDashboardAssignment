import { Heart } from "lucide-react";

export default function ProductCard({ products, openModal, isFavorite, toggleFavorite }) {
  return (
    <div
      className="
        relative
        bg-white dark:bg-[#2c2c2e] 
        border border-[#e5e5e7] dark:border-[#3a3a3c]
        p-5 rounded-2xl 
        shadow-[0px_4px_12px_rgba(0,0,0,0.06)]
        dark:shadow-[0px_4px_12px_rgba(0,0,0,0.4)]
        hover:shadow-[0px_6px_20px_rgba(0,0,0,0.10)]
        hover:dark:shadow-[0px_6px_20px_rgba(0,0,0,0.55)]
        hover:-translate-y-1
        transition-all cursor-pointer
        text-gray-900 dark:text-[#f5f5f7]
      "
      onClick={() => openModal(products)}
    >

      {/*  Favorite Button */}
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

      <img
        src={products.image}
        alt={products.title}
        className="w-full h-48 object-contain mb-4"
      />

      <h4 className="font-semibold text-[15px] mb-2">
        {products.title.length > 50
          ? products.title.slice(0, 50) + "..."
          : products.title}
      </h4>

      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 capitalize">
        {products.category}
      </p>

      <div className="flex items-center gap-1 mb-2">
        <span className="text-yellow-500">⭐</span>
        <span className="text-sm">{products.rating.rate}</span>
        <span className="text-xs text-gray-400">({products.rating.count})</span>
      </div>

      <p className="text-green-600 dark:text-green-400 font-bold text-lg">
        ₹ {products.price}
      </p>
    </div>
  );
}
