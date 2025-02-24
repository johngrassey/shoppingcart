import { PropTypes } from "prop-types";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function ProductCard({ product }) {
  const { name, price, image, description, quantity, id, inCart } = product;
  const {
    incrementProductQuantity,
    decrementProductQuantity,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="card shadow-md w-96">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
        <div className="card-actions">
          <div className="flex justify-between gap-2">
            <button
              className="btn btn-secondary text-white text-2xl"
              onClick={() => decrementProductQuantity(id)}
            >
              -
            </button>
            <input
              type="text"
              placeholder={quantity}
              className="input text-center text-lg"
            />
            <button
              className="btn btn-secondary text-white text-2xl"
              onClick={() => incrementProductQuantity(id)}
            >
              +
            </button>
          </div>
          {!inCart ? (
            <button
              className="btn btn-primary btn-block text-xl"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="btn btn-primary btn-block text-xl"
              onClick={() => removeFromCart(product)}
            >
              Clear from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
  }).isRequired,
};
