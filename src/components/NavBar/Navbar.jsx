import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Navbar({ quantity }) {
  return (
    <header className="navbar p-10">
      <div className="navbar-start">
        <Link to="/">
          <h1 className="text-5xl">BOXWORTHY</h1>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="indicator">
          {quantity > 0 ? (
            <span className="indicator-item badge badge-secondary text-white">
              {quantity}
            </span>
          ) : null}
          <Link to="/checkout">
            <ShoppingCart size={36} />
          </Link>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  quantity: PropTypes.number.isRequired,
};
