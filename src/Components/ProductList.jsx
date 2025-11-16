import Loading from "./Loading";
import ProductCard from "./ProductCard";

export default function ProductList({ products, loading, openModal, favorites, toggleFavorite }) {

  if (loading) {
    return (
      <div className="grid gap-6 mt-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {Array(10).fill().map((_, i) => (
          <Loading key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 mt-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {products.map(p => (
        <ProductCard
          key={p.id}
          products={p}
          openModal={openModal}
          isFavorite={favorites.some(item => item.id === p.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
