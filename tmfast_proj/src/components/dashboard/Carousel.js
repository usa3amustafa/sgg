import React, { useState } from "react";

import { carouselData } from "./carouselData";

const Carousel = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (carouselData.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (carouselData.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="carousel">
      <h2 className="carousel-title">Featured Products</h2>
      {/* Carousel card  */}
      <div className="carousel-slider">
        {carouselData.map(c => {
          return (
            <div
              key={c.id}
              className="carousel-item"
              style={{
                backgroundImage: `url(${c.bgImg})`,
                transform: `translateX(${x}%)`
              }}
            >
              <h2 className="carousel-heading">{c.heading}</h2>
              <p className="carousel-text">{c.text}</p>

              <button className="btn carousel-item-btn">{c.btnText}</button>
            </div>
          );
        })}
        {/* controls */}
        <div className="carousel-btn left-btn" onClick={goLeft}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="carousel-btn right-btn" onClick={goRight}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
