import { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { anim } from "./main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { getDeals } from "./api/deals";
import { getMenu } from "./api/menu";

function App() {
  const [deals, setDeals] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getDeals()
      .then((res) => {
       console.log(res);
        setDeals(res);
      })
      .catch((err) => console.log(err));

  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home deals={deals}/>} />
          <Route path="/menu" element={<Menu deals={deals}/>} />
        </Routes>
        <Footer />

        <div id="ftco-loader" class="show fullscreen">
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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
