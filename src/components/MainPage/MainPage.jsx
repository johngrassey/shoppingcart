import Hero from "../Hero/Hero";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Hero />
      <Link to="/shoppingpage">
        <Button name="Shop Now" />
      </Link>
    </div>
  );
}
