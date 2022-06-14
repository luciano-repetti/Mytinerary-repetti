import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";

function Slider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let slider = props.images;


  return (
    <div className="slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
          slider.map(carrousel =>{
            return(
              <Carousel.Item key={carrousel.id}>
                <div className="parent">
                  {
                    carrousel.slider.map(city =>{
                      return(
                        <div key={city.id} className="div">
                          <img className="d-block w-100" src={city.url} alt="{city.name}" />
                        </div>
                      )
                    })
                  }
                </div>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  );
}

export default Slider;
