import "../style.css";
import React, { useState, useEffect } from "react";
import { useParams, Link as LinkRouter } from "react-router-dom";
import ScrollToTop from "../components/ScollToTop";

import { useDispatch, useSelector } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

function Detail() {
  ScrollToTop()
  let { id } = useParams();
  const dispatch = useDispatch()

  // const [city, setCity] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/api/cities/" + id)
    //   .then((response) => setCity(response.data.response.city));
    dispatch(citiesActions.getOneCity(id))
  }, []);

  const city = useSelector(store => store.citiesReducer.city)

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
