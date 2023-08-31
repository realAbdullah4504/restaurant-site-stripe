import axios from "axios";

export const makePayment = async (cart) => {
  try {
    const response = await axios.post("http://localhost:5000/cart", cart, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    // Handle error here
    console.error("Error making payment:", error);
    throw error;
  }
};
