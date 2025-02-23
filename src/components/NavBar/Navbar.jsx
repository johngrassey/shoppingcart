import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar p-5">
      <div className="navbar-start">
        <Link to="/">
          <h1 className="text-5xl">BOXWORTHY</h1>
        </Link>
      </div>
      <div className="navbar-end">
        <ShoppingCart size={36} />
      </div>
    </header>
  );
}
