import React, { useState } from "react";
import { Plus } from "feather-icons-react/build/IconComponents";
import Minus from "feather-icons-react/build/IconComponents/Minus";
import styles from "./Deals.module.css";
import { useSelector } from "react-redux";

const Product = ({ deal, handleClick }) => {
  // console.log('dealdsadasd',cart)

  const cart = useSelector((state) => state.cart.cart);
  const initialCount = () => {
    const filtered = cart?.find((item) => item._id === deal._id);
    if (filtered) return filtered.count;
    else return 1;
  };

  const [count, setCount] = useState(initialCount);
  

  return (
    <div className="col-lg-6 d-flex">
      <div className="services-wrap d-flex">
        <a
          href="#"
          className="img"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/deals/${deal.image})`,
          }}
        ></a>
        <div className="text p-4" style={{ position: "relative" }}>
          <h3>{deal.title}</h3>
          <p>{deal.description} </p>
          <p className="price">
            <span>Rs {deal.price}</span>{" "}
            <a
              className="ml-2 btn btn-white btn-outline-white"
              onClick={handleClick(deal, count)}
            >
              Add in Cart
            </a>
          </p>
          <div className="d-flex  justify-content-center mt-3">
            <Minus
              className={styles.floatingAddButton}
              onClick={() => {
                if (count !== 0) setCount(count - 1);
              }}
            />
            <span> {count} </span>{" "}
            <Plus
              className={styles.floatingAddButton}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
