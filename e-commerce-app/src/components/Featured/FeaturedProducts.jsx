import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const REACT_APP_API_URL = `http://localhost:1337/api`;

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="featured">
      <section className="top-section">
        <h1>Featured Products</h1>
      </section>

      {/* <section className="products-section">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section> */}

      <section className="products-section">
        {products?.data?.map((el) => {
          return <div key={el.attributes.desc}>{el.attributes.desc}</div>;
        })}
      </section>
    </div>
  );
}

export default FeaturedProducts;
