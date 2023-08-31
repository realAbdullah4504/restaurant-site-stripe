import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "feather-icons-react/build/IconComponents/ShoppingCart";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
  const { path } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
};
const NavBar = ({ cartBadge }) => {
  return (
    <>
    <ScrollToTop />
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        style={{ height: "66px", paddingTop: "12px" }}
        id="ftco-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span
              className="mr-1 icon"
              style={{
                display: "inline-block",
                // width: "50px", // Adjust the width based on your design
                // height: "50px", // Adjust the height based on your design
              }}
            >
              <img
                src="../../../images/Capsicum Pizza Logo1-03.png"
                alt="Logo"
                style={{
                  // maxWidth: "100%",
                  // maxHeight: "100%",
                  display: "block",
                  width: "100px",
                  height: "30px",
                }}
              />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <div className={styles.cart}>
                    <ShoppingCart />
                    {cartBadge !== 0 && (
                      <span className={`${styles.badge}`}>{cartBadge}</span>
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
