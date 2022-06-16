import "../style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link as LinkRouter } from "react-router-dom";

function Detail() {
  let { id } = useParams();

  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities/" + id)
      .then((response) => setCity(response.data.response.city));
  }, []);

  return (
    <main className="mainCities">
        <div className="linkBack"><LinkRouter to={'/cities'}><img src={require("../img/arrowBack.png")} />Back</LinkRouter></div>
      <div className="containerCards" key={city._id}>
        <div className="cardUni">
          <img src={city.imgUrl} alt="" />
          <div className="infoCard">
            <div className="namesCard">
                <p>{city.name}</p>
                <p>{city.country}</p>
            </div>
            <p>Description: {city.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detail;
