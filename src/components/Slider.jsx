import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  let carousel1 = props.images.slider1;
  let carousel2 = props.images.slider2;
  let carousel3 = props.images.slider3;

  const slider1 = carousel1.map((date) => {
    return (
      <div key={date.id} className="div">
        <img className="d-block w-100" src={date.url} alt="{date.name}" />
        <p>{date.name}</p>
      </div>
    );
  });

  const slider2 = carousel2.map((date) => {
    return (
      <div key={date.id} className="div">
        <img className="d-block w-100" src={date.url} alt="{date.name}" />
        <p>{date.name}</p>
      </div>
    );
  });

  const slider3 = carousel3.map((date) => {
    return (
      <div key={date.id} className="div">
        <img className="d-block w-100" src={date.url} alt="{date.name}" />
        <p>{date.name}</p>
      </div>
    );
  });

  return (
    <div className="slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="parent">{slider1}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="parent">{slider2}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="parent">{slider3}</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
