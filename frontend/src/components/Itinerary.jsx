import React, { useState } from "react";

function Itinerary({itineraries}){
    const [itineraryActivities, setItineraryActivities] = useState(false)
    function expandItinerary(){
        setItineraryActivities(!itineraryActivities)
    }

    return(
    <div className="containerItineraries">
        {
            itineraries.map((itinerary, index) => {
                return(
                    <div key={index} className="itinerary">
                        <div className="infoItinerary">
                            <h2>{itinerary.nameItinerary}</h2>
                            <p>Duration: {itinerary.duration}</p>
                            <p>Price: {itinerary.price}</p>
                        </div>
                        <div className="hashtags">
                        {itinerary.hashtags.map((hash, index) =>
                            <p key={index}>#{hash}</p>)}
                        </div>
                        <div className="seeMore">
                            <div className="itineraryFooter">
                                <img src={itinerary.user.imgUser} alt="" />
                                <p>{itinerary.user.nameUser}</p>
                            </div>
                            <div className="itineraryFooter right">
                                <button className="buttonItinerary" onClick={expandItinerary}>
                                    <img src={require("../img/flechaUp.png")} alt="" />
                                    <p>see more</p>
                                </button>
                            </div>
                        </div>
                        <div className={itineraryActivities ? "activities active" : "activities"}>
                            <h2>For now there is no activity</h2>
                        </div>
                    </div>
                )
            })
        }
    </div>
)}

export default Itinerary;