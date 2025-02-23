import Button from "../Button/Button";
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
          <Button name="Add to Cart" />
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
