import React, { useState } from "react";
import { useSelector } from "react-redux";

const MenuList = ({ menu, handleClick }) => {
  const cart = useSelector((state) => state.cart.cart);
  const initialCount = () => {
    const filtered = cart?.find((item) => item._id === menu._id);
    if (filtered) return filtered.count;
    else return 1;
  };

  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div
        class="img"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/deals/${menu.image})`,
        }}
      ></div>
      <div class="desc pl-3">
        <div class="d-flex text align-items-center">
          <h3>
            <span>{menu.title}</span>
          </h3>

          <span class="price">
            Rs {menu.price} {menu.size.label}
          </span>
        </div>
        <div class="d-block d-flex justify-content-between">
          <p>{menu.description.slice(0, 30)}</p>
          <a
            className="ml-2 btn btn-white btn-outline-white"
            onClick={handleClick(menu, count)}
          >
            Add in Cart
          </a>
        </div>
      </div>
    </>
  );
};
const Menu = ({ groupedMenu, handleClick }) => {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center mb-5 pb-3 mt-5 pt-5">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <h2 class="mb-4">Our Menu Pricing</h2>
          <p class="flip">
            <span class="deg1"></span>
            <span class="deg2"></span>
            <span class="deg3"></span>
          </p>
          <p class="mt-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      <div class="row ftco-animate">
        {groupedMenu?.map((menu) => (
          <div key={menu._id} class="col-md-6 ">
            <div class="pricing-entry d-flex ">
              <MenuList menu={menu} handleClick={handleClick} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
