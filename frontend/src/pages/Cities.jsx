import React, {useState, useEffect} from "react";
import Cards from "../components/Cards";
import ScrollToTop from "../components/ScollToTop";

import { useDispatch, useSelector } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'



function Cities() {
  ScrollToTop()

    const [inputValue, setInputValue] = useState("");
    // const [cities, setCities] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(citiesActions.getCities())
  }, [])

    useEffect(() => {
        dispatch(citiesActions.filterCities(inputValue))
    }, [inputValue])

    const cities = useSelector(store => store.citiesReducer.filterCity)
  
    return (
      <main className="mainCities">
        <div>
          <input placeholder="Search" onKeyUp={(evento) => {setInputValue(evento.target.value);}}type="text" />
        </div>
        <div>
        {
            cities?.length > 0 ? (<Cards filter={cities} />) : <div className="noFound"><h1>no found: {inputValue}</h1></div>
        }
        </div>
      </main>
    );
}

export default Cities;