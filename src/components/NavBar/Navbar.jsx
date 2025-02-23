import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-5">
      <Link to="/">
        <h1 className="text-5xl">BOXWORTHY</h1>
      </Link>
      <ShoppingCart size={36} />
    </header>
  );
}
