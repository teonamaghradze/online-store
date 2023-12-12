import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/Featured/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Slider />
      <Categories />
      <FeaturedProducts />
      <Contact />
    </div>
  );
}

export default Home;
