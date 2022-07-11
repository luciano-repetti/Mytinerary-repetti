import "../style.css";
import React, { useState, useEffect } from "react";
import { useParams, Link as LinkRouter } from "react-router-dom";
import ScrollToTop from "../components/ScollToTop";

import { useDispatch, useSelector } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from "../redux/actions/itinerariesActions";
import Itinerary from "../components/Itinerary";

function Detail() {
  // ScrollToTop()
  let { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(citiesActions.getOneCity(id))
    dispatch(itinerariesActions.findTimFromCity(id))
  }, [id]);

 


  const itineraries = useSelector(store => store.itinerariesReducer.itineraries)


  return (
    <main className="mainCities">
        <div className="linkBack"><LinkRouter to={'/cities'}><img src={require("../img/arrowBack.png")} />Back</LinkRouter></div>
        {itineraries.length > 0 ? <Itinerary itineraries={itineraries} idCity={id} /> : <h2>There are no itineraries</h2>}
    </main>
  );
}

export default Detail;
