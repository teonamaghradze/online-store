import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const REACT_APP_API_URL = `http://localhost:1337/api`;

function FeaturedProducts() {
  const data = [
    {
      id: 1,
      img1: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long sleeve solid T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 9,
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

    {
      id: 3,
      img1: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long sleeve solid T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 9,
    },
    {
      id: 4,
      img1: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Long sleeve solid T-shirt",
      isNew: true,
      oldPrice: 29,
      price: 9,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data); // Log the data here, not products.data
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

      <section className="products-section">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>

      {products.data.map((el) => {
        console.log(el.attributes.desc);
        return <div>{el.attributes.desc}</div>;
        // return <h1 key={el.id}>{el.attributes.title}</h1>;
      })}
    </div>
  );
}

export default FeaturedProducts;
