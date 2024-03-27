import { useContext } from "react";
import { BasketContext } from "../contexts/basketContext";

const Card = ({ data }) => {
  const { image, title, price, category } = data;
  const context = useContext(BasketContext);
  console.log(context);
  return (
    <div
      className="card py-2 d-flex flex-column justify-content-between"
      style={{ width: "250px" }}
    >
      <div className="card-body text-center">
        <div className="d-flex justify-content-center align-items-center">
          <img src={image} style={{ height: "120px" }} />
        </div>
        {title.length > 40 ? (
          <h4>{title.slice(0, 40)}...</h4>
        ) : (
          <h4>{title}</h4>
        )}
        <p className="text-success">{price}$</p>
        <p>{category}</p>
      </div>
      <div className="card-button d-flex justify-content-center">
        <button
          className="btn btn-dark w-75"
          onClick={() => context.addToBasket(data)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
