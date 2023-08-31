import React from "react";

import { useState } from "react";
import CardItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import ModalMain from "../reusableComponents/ModalMain";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTotalAmount } from "../../state";

const CartMenu = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // console.log("cart", cart);
  const totalPrice = cart?.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);
  // console.log("order", cart);

  return (
    <div className="container table-responsive">
      {/* <ModalMain
        formModal={true}
        msg="Are you Sure Want to Delete"
        // clickHandlerCancel={() => {
        //   setDeleteModal(!deleteModal);
        // }}
        // clickHandlerSubmit={() => handleDelete(deleteId)}
        // isLoading={isLoading}
        buttonColour="danger"
        buttonText="Delete"
        Component={
          <p className="ms-2" style={{ color: "red" }}>
            Are You Sure Want To Delete
          </p>
        }
      /> */}
      <table class="table mx-auto" style={{ color: "#E0E0E0" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Number</th>
            <th scope="col">Total Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {cart?.map((item, index) => (
          <CardItem key={item._id} item={item} index={index} />
        ))}
      </table>
      <div className="d-flex justify-content-end align-items-center">
        <span style={{ color: "#FAC564" }}>SubTotal: </span>
        <span style={{ color: "#FAC564", fontSize: "20px" }}>
          {"  "}Rs {Math.ceil(totalPrice)}
        </span>
        <Link
          to="/shop"
          className="ml-2 btn btn-white btn-outline-white"
          // onClick={handleClick(deal, count)}
          onClick={() => {
            dispatch(setTotalAmount({ total: totalPrice }));
            // console.log("hit");
          }}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartMenu;
