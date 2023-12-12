import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img style={{ width: "20px" }} src="/flag.png" alt="" />
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="item">
            <span>USD</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className="item">
            <Link to="/products/1">Women</Link>
            <Link to="/products/2">Men</Link>
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">ONLINE STORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faHeart} />
            <div
              className="cart-icon"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Cart />}
    </div>
  );
}

export default Navbar;
