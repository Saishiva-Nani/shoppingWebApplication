import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assests/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      {/* Mobile dropdown */}
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="menu"
      />

      {/* Navigation menu */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" className={menu === "shop" ? "active" : ""}>
            Shop
          </Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" className={menu === "mens" ? "active" : ""}>
            Men
          </Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" className={menu === "womens" ? "active" : ""}>
            Women
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className={menu === "kids" ? "active" : ""}>
            Kids
          </Link>
        </li>
      </ul>

      {/* Login / Cart */}
      <div className="nav-login-cart">
        {localStorage.getItem("authent-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("authent-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        {/* Cart wrapper for hover + active effect */}
        <div
          className={`nav-cart-wrapper ${menu === "cart" ? "active" : ""}`}
          onClick={() => {
            setMenu("cart");
            navigate("/cart");
          }}
        >
          <img src={cart_icon} alt="cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
