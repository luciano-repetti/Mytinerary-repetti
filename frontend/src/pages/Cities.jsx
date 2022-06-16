import React, {useState, useEffect} from "react";
import axios from "axios";
import Cards from "../components/Cards";



function Cities() {
    const [inputValue, setInputValue] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/cities").then((response) => 
            setCities(response.data.response.cities)
        )
    }, [])

  
    const filterCities = cities.filter((city) => {
      return city.name.toLowerCase().startsWith(inputValue.toLowerCase().trim());
    });
    return (
      <main className="mainCities">
        <div>
          <input placeholder="Search" onKeyUp={(evento) => {setInputValue(evento.target.value);}}type="text" />
        </div>
        <div>
        {
            filterCities.length > 0 ? (<Cards filter={filterCities} />) : <div className="noFound"><h1>no found: {inputValue}</h1></div>
        }
        </div>
      </main>
    );
}

export default Cities;