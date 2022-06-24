import React, {useState, useEffect} from "react";
import { Link as LinkRouter } from "react-router-dom";



function Cards({filter}){

    

    return(
        <div className="containerCards">
        {filter.map(city => {
            return(
                <div className="cards" key={city._id}>
                        <img src={city.imgUrl} alt="" />
                    <div className="infoCard">
                        <p>{city.name}</p>
                        <LinkRouter to={`/itineraries/city/${city._id}`}>Itineraries</LinkRouter>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Cards;
