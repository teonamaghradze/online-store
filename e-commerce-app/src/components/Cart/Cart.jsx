import "./Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const data = [
    {
      id: 1,
      img1: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long sleeve solid T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 9,
      desc: "lorem ipusm",
    },
    {
      id: 2,
      img1: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long sleeve solid T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 9,
    },
  ];

  return (
    <div className="cart">
      <h1>Shop your items</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img className="image" src={item.img1} alt="" />
          <h1>{item.title}</h1>
          <p>{item?.desc?.substring(0, 100)}</p>
          <div className="price">1 x {item.price}</div>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      ))}
      <div className="total">
        <span>TOTAL PRICE</span>
        <span>$123</span>
      </div>
      <button>Priceed to Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
