import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="p-40 flex flex-col items-center justify-center text-3xl">
      <h2 className="p-4 text-5xl">
        Beautiful boxes for life&apos;s precious moments
      </h2>
      <Link to="/shoppingpage">
        <Button name="Shop Now" />
      </Link>
    </div>
  );
}
