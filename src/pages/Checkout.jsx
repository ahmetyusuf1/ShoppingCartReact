import { useContext } from "react";
import { BasketContext } from "../contexts/basketContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Checkout = () => {
  const { addToBasket, basket, removeFromBasket } = useContext(BasketContext);
  // console.log(addToBasket);
  // console.log(basket);
  // console.log(removeFromBasket);
  const total = basket.reduce((total, i) => total + i.price * i.amount, 0);
  return (
    <div>
      {basket.length === 0 ? (
        <h3 className="text-center my-5">Add products to cart</h3>
      ) : (
        <h4 className="text-center my-5">
          Total <span className="text-success">{total.toFixed(2)}$</span>
        </h4>
      )}
      {basket.map((i, index) => {
        const { image, title, price, amount } = i;
        return (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center p-3 gap-3"
          >
            <img
              src={image}
              style={{ height: "100px", borderRadius: "10px" }}
            />
            <h4>{title.slice(0, 20)}...</h4>
            <h3>{price}$</h3>
            <p>Amount: {amount}</p>
            <div>
              <IoMdArrowDropup
                role="button"
                className="text-success fs-2"
                onClick={() => addToBasket(i)}
              />
              <IoMdArrowDropdown
                role="button"
                className="text-danger fs-2"
                onClick={() => removeFromBasket(i)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
