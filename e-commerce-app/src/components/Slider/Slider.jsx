import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Slider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const data = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508970707-f6426fb47503?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleLeft() {
    setCurrentSlide(
      currentSlide === 0 ? 2 : (currentSlide) => currentSlide - 1
    );
  }

  function handleRight() {
    setCurrentSlide(
      currentSlide === 2 ? 0 : (currentSlide) => currentSlide + 1
    );
  }

  return (
    <div className="slider">
      <div className="container">
        <img src={data[currentSlide]} alt="" />
      </div>

      <div className="icons">
        <FontAwesomeIcon
          className="left"
          icon={faArrowCircleLeft}
          onClick={handleLeft}
        />
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          className="right"
          onClick={handleRight}
        />
      </div>
    </div>
  );
}

export default Slider;
