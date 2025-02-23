import ProductCard from "../ProductCard/ProductCard";

const product = {
  name: "Product 1",
  price: 10,
  image: "src/assets/diagonal_far.JPG",
  id: 1,
  description: "This is a beautiful box that your loved one will enjoy.",
};

export default function ShoppingPage() {
  return (
    <>
      <h2>This is the Shopping Page</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </>
  );
}
