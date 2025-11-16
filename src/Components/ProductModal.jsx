    export default function ProductModal({ product, closeModal }) {
    if (!product) return null;

    return (
        <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
        onClick={closeModal}
        >
        <div
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-[95%] max-w-4xl shadow-2xl animate-scaleIn relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Close Button */}
            <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl hover:text-red-500 transition"
            >
            ✖
            </button>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">

            {/* LEFT SIDE — Big Image */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full md:w-[80%] h-[250px] md:h-[350px] bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
                </div>
            </div>

            {/* RIGHT SIDE — Product Details */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {product.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize mb-3">
                {product.category}
                </p>

                <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="text-gray-800 dark:text-gray-200 font-semibold">
                    {product.rating.rate}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                    ({product.rating.count} reviews)
                </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                {product.description}
                </p>

                <p className="text-green-600 dark:text-green-400 font-bold text-3xl mb-5">
                ₹ {product.price}
                </p>

                <button
                className="w-full md:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 
                            text-white rounded-xl font-semibold shadow-md transition"
                >
                Add to Cart
                </button>
            </div>

            </div>

        </div>
        </div>
    );
    }
