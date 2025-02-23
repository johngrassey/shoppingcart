import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Navbar({ quantity }) {
  return (
    <header className="navbar p-5">
      <div className="navbar-start">
        <Link to="/">
          <h1 className="text-5xl">BOXWORTHY</h1>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="indicator">
          {quantity > 0 ? (
            <span className="indicator-item badge badge-secondary">
              {quantity}
            </span>
          ) : null}
          <ShoppingCart size={36} />
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  quantity: PropTypes.number.isRequired,
};
