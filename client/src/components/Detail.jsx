import React from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { getDetail } from "../actions"
import { useEffect } from "react"

export default function Detail(props){
    //console.log(props)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const myPokemon = useSelector((state) => state.detail)

    return(
        <div class="card">
         {
        myPokemon.length > 0 ?
        <div>
           <h1>Soy {myPokemon[0].name}</h1>
           <h1>Mido {myPokemon[0].height}</h1>
           <h1>Peso {myPokemon[0].weight}</h1>
           <h1>Mi nivel de ataque es {myPokemon[0].attack}</h1>
           <h1>Mi nivel de defensa es {myPokemon[0].defense}</h1>
           <h1>Mi velocidad es {myPokemon[0].speed}</h1>
           <h1>Mi salud es {myPokemon[0].health}</h1>
           <img src={myPokemon[0].image} alt="" width="500px" height="700px" />
        </div> : <p>loading...</p>
    }
    <Link to="/home">
        <button>VOLVER</button>
    </Link>
        </div>
    )
} 