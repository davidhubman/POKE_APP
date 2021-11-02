import React from "react";

export default function Card({name, height, weight, attack, speed, image, health, types, id}) {
 //const finalType =    

 return (
        <div className = "flex">
        <div className = 'Card'>
           <h3>{name}</h3>
           <h5>{height}</h5>
           <h5>{weight}</h5>
           <h5>{attack}</h5>
           <h5>{speed}</h5>
           <h5>{health}</h5>
           <h5>
               { id?.length > 7
                ? types?.map((p) => p.name).join(", ")
                : types.join(", ")
            }
            </h5>
           <img src={image}  className="card-header" alt='img not found' width= '200px' height='250px'/>
           </div>
        </div>
    )
}

/*

 */ 