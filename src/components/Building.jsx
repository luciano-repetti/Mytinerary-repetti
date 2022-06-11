import React from "react";

function Building(){
    return(
        <main>
            <div className="building">
                <h2>Website under construction. Come back soon!</h2>
                <img src={require('../img/building.png')} alt="" />
            </div>
        </main>
    )
}

export default Building;