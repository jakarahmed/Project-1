

const Card = () => {
    return (
        <div className="grid md:grid-cols-3 gap-9">
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="../public/heart-1776746_1920.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="../public/heart-1776746_1920.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose??</p>
    <div className="card-actions">
      <button className="btn btn-active btn-neutral">Buy Now</button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="../public/heart-1776746_1920.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;