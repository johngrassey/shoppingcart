import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>BOXWORTHY</h1>
      </Link>
      <ShoppingCart size={36} />
    </header>
  );
}
