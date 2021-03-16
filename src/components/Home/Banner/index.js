import React, { useState } from "react";

import { Link } from "gatsby";

import {
  Container,
  LeftIcon,
  RightIcon,
  BgImage,
  RightButtonIcon,
} from "./styles";

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
      <div className="controls">
        <LeftIcon className="left-arrow" onClick={prevSlide} />
        <RightIcon className="right-arrow" onClick={nextSlide} />
      </div>

      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active " : "slide "}
          key={index}>
          <div className="content">
            <h3>{slide.description}</h3>
            <h2>{slide.title}</h2>
            <h4>{slide.subtitle}</h4>

            <Link to={slide.url}>
              <span>Mais Info</span>
            </Link>
          </div>

          {index === current && (
            <BgImage
              fluid={slide.image.childImageSharp.fluid}
              alt={slide.title}
            />
          )}
        </div>
      ))}
    </Container>
  );
};

export default Banner;
