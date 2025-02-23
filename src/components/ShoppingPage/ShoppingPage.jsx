export default function ShoppingPage() {
  return (
    <>
      <h2>This is the Shopping Page</h2>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        <div className="card shadow-md w-96">
          <figure></figure>
          <div className="card-body">
            <h3 className="card-title">Box</h3>
            <p>Here is a description of this box.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card shadow-md w-96">
          <figure></figure>
          <div className="card-body">
            <h3 className="card-title">Box</h3>
            <p>Here is a description of this box.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card shadow-md w-96">
          <figure></figure>
          <div className="card-body">
            <h3 className="card-title">Box</h3>
            <p>Here is a description of this box.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
