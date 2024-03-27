import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useContext } from "react";
import { BasketContext } from "../contexts/basketContext";

const Header = () => {
  const context = useContext(BasketContext);
  const totalAmount = context.basket.reduce((total, i) => total + i.amount, 0);
  return (
    <header className="d-flex justify-content-between align-items-center p-4 bg-dark sticky-top">
      <Link to={"/"} className="text-info text-decoration-none fs-3">
        Context Store
      </Link>
      <Link to={"/basket"} className="text-decoration-none fs-3 text-light">
        <IoMdCart className="fs-1" />
        <span className="mx-2 fs-6 fw-normal bg-danger badge">
          {totalAmount}
        </span>
      </Link>
    </header>
  );
};

export default Header;
