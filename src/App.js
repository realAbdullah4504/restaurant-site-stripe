import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { anim } from "./main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import { getDeals } from "./api/deals";
import { getMenu } from "./api/menu";
import StripePayment from "./components/StripePayment";
import CartMenu from "./components/CartMenu";
import { useDispatch, useSelector } from "react-redux";
import { setOrder, setDeals, setDeal } from "./state";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";


function App() {
  const dispatch = useDispatch();
  // const [deals, setDeals] = useState([]);
  const [menu, setMenu] = useState([]);
  const [cartBadge, setCartBadge] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  // const [order, setOrder] = useState([]);

  const [countItem, setCountItem] = useState();
  const [alert, setAlert] = useState(false);

  const handleToast = (type, message) => {
    toast[type](message);
  };

  useEffect(() => {
    getDeals()
      .then((res) => {
        console.log(res.deals);
        // setDeals(res);
        dispatch(setDeals({ deals: res.deals }));
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (deal, count) => () => {
    console.log("clicked", count);

    const filteredDeal = cart?.find((item) => item._id === deal._id);
    if (!filteredDeal) {
      dispatch(setOrder({ deal, count }));
      handleToast("success", "Added to the Cart");
    } else {
      handleToast("error", "Item is already In The Cart");
    }

    // console.log(order);
  };
  useEffect(() => {
    setCartBadge(cart.length);
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        
        <NavBar cartBadge={cartBadge} />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu handleClick={handleClick} />} />
          <Route path="/shop" element={<StripePayment />} />
          <Route path="/cart" element={<CartMenu />} />
        </Routes>
        <Footer />

        {/* <div id="ftco-loader" class="show fullscreen">
          <svg class="circular" width="48px" height="48px">
            <circle
              class="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              class="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
