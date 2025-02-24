import { PropTypes } from "prop-types";

export default function CheckoutCard({ product }) {
  const { name, price, image, quantity } = product;

  return (
    <div className="flex justify-between py-5 gap-5 w-full">
      <div className="flex justify-between gap-5">
        <figure className="max-w-3xs">
          <img src={image} alt={name} className="rounded-lg" />
        </figure>
        <div className="py-5">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-xl">
            {quantity} unit @ ${price}
          </p>
        </div>
      </div>
      <div className="py-5">
        <p className="text-2xl">Total: ${price * quantity}</p>
      </div>
    </div>
  );
}

CheckoutCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
