import ProductCard from "../ProductCard/ProductCard";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function ShoppingPage() {
  const { products } = useContext(CartContext);

  return (
    <>
      <h2>This is the Shopping Page</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
