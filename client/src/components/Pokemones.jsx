import React from "react"
import Card from "./Card"


export default function Pokemones (pokemones) {
    return (
        <div>
            {pokemones.length > 0 ?
             pokemones.map((data) => (<Card data={data} />) )
           : <h1>mnkjinj </h1> }
        </div> 
    )}