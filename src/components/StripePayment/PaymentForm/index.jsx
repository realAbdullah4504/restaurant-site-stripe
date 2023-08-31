import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { makePayment } from "../../../api/payment";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../../../state";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const price = useSelector((state) => state.cart.totalAmount);
  const cart = useSelector((state) => state.cart.cart);

  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // console.log('pricdadse',price);
  const handleToast = (type, message) => {
    toast[type](message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const filteredProducts = cart?.map((item) => ({
      itemId: item._id,
      count: item.count,
    }));

    const filteredCart = {
      products: filteredProducts,
      totalAmount: price,
      orderStatus: "pending",
      paymentMethodId: paymentMethod.id,
      amount: price * 100,
      currency: "pkr",
    };

    console.log("carttttt", filteredCart);

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      // Send the paymentMethod.id to your backend for processing
      try {
        const response = await makePayment(filteredCart); // Using the modified makePayment function

        const data = response.data; // Access response data directly, no need for .json() method

        if (response.status === 200) {
          // Check status code for success
          dispatch(resetCart({}));

          handleToast("success", "Payment Successful");
          // setPaymentSuccess(true);
          setPaymentError(null);
          navigate("/");
        } else {
          setPaymentError(data.error);
          handleToast("error", "Payment Failed");
          // setPaymentSuccess(false);
        }
      } catch (error) {
        // Handle error here
        console.error("Error making payment:", error);
        // You can also setPaymentError here if desired
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "300px", marginBottom: "20px" }}>
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </div>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {/* {paymentError && <p style={{ color: "red" }}>{paymentError}</p>} */}
      {/* {paymentSuccess && <p style={{ color: "green" }}>Payment successful!</p>} */}
    </form>
  );
};

export default PaymentForm;
