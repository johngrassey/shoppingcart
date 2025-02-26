import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen absolute top-0 left-0 z-10"
      style={{
        backgroundImage: `url('/diagonal_far.JPG')`,
      }}
    >
      <div className="hero-content flex-col items-start absolute bottom-0 left-0 p-10">
        <h2 className="text-6xl card-title text-primary">
          Beautiful boxes for
          <br />
          life&apos;s precious moments
        </h2>
        <Link to="/shoppingpage">
          <button className="btn btn-accent btn-xl text-white">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
