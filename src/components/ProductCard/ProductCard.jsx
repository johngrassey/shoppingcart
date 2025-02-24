import { PropTypes } from "prop-types";

export default function ProductCard({ product }) {
  const { name, price, image, description } = product;
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
            <button className="btn btn-secondary text-white text-2xl">-</button>
            <input
              type="text"
              placeholder="0"
              className="input text-center text-lg"
            />
            <button className="btn btn-secondary text-white text-2xl">+</button>
          </div>
          <button className="btn btn-primary btn-block text-xl">
            Add to Cart
          </button>
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
  }).isRequired,
};
