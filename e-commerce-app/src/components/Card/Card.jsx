import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Arrival</span>}
          <img src={item.img1} alt="" className="first-img" />
          <img src={item.img2} alt="" className="second-img" />
        </div>
        <h2>{item.title}</h2>
        <div className="price">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
