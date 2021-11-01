import React from "react";

export default function Card({name, height, weight, attack, speed, image, health, types}) {
    
 const data = {name, height, weight, attack, speed, image, health, types}
    
 return (
        <fragment className = "flex">
        <div className = 'Card'>
           <h3>{data.name}</h3>
           <h5>{data.height}</h5>
           <h5>{data.weight}</h5>
           <h5>{data.attack}</h5>
           <h5>{data.speed}</h5>
           <h5>{data.health}</h5>
           <h5>{data.types}</h5>
           <img src={data.image}  className="card-header" alt='img not found' width= '200px' height='250px'/>
           </div>
        </fragment>
    )
}