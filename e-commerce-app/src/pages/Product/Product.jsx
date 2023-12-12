import { useState } from "react";
import "./Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1622137276920-2351359e3450?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1578840602674-bd891cb7ea5b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="product">
      <div className="left-images">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="main-img">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right-content">
        <h1>Title</h1>
        <span className="price">$155</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          consequuntur quaerat natus odit dolor impedit, nihil eaque perferendis
          voluptatum fugit reiciendis nesciunt libero ratione voluptas error
          harum mollitia ex. Temporibus.
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> Ad to cart
        </button>

        <div className="link">
          <div className="item">
            <FontAwesomeIcon icon={faHeart} /> Add to wishlist
          </div>
        </div>

        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
