import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('src/assets/diagonal_far.JPG')`,
      }}
    >
      <div className="hero-content flex-col">
        <h2 className="text-5xl card-title">
          Beautiful boxes for life&apos;s precious moments
        </h2>
        <Link to="/shoppingpage">
          <Button name="Shop Now" />
        </Link>
      </div>
    </div>
  );
}
