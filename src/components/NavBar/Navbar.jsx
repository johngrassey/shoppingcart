import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>BOXWORTHY</h1>
      <ShoppingCart size={36} />
    </nav>
  );
}
