import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const grandTotal = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-3/5 items-center shadow-xl p-10 rounded-2xl">
        <h2 className="text-4xl mb-8">Checkout</h2>
        {cart.length === 0 ? (
          <div
            role="alert"
            className="alert alert-error alert-soft w-full mb-5"
          >
            <span>Your Cart Is Empty</span>
          </div>
        ) : (
          cart.map((product) => (
            <CheckoutCard key={product.id} product={product} />
          ))
        )}
        <div className="flex flex-col items-end w-full">
          <p className="text-2xl font-bold text-end">
            Grand Total: ${grandTotal}
          </p>

          {cart.length > 0 && (
            <button
              className="btn btn-primary btn-xl my-5"
              onClick={() => alert("Thank you for your purchase!")}
            >
              Complete Your Purchase
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
