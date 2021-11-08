import React from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { getDetail } from "../actions"
import { useEffect } from "react"

import styles from "./Detail.module.css"


export default function Detail(props){
    //console.log(props)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const myPokemon = useSelector((state) => state.detail)
    //const name = myPokemon[0].name
    //const arrayTypes = myPokemon[0].types.split(",")
    //const types = arrayTypes.forEach(function(element) { return  });)
    //  
    //<img src={require("./types/"+(x)+".gif").default } alt="joder"/>)
    //console.log(arrayTypes[4])

    return(
        <div className={styles.detailBack}>
         {
        myPokemon.length > 0 ?
        <div className={styles.allDetail}>
            <div className={styles.nombre}>
               <h1>{myPokemon[0].name.toUpperCase()}</h1>
            </div>

           <div className={styles.stats}>
           <div><h3>Estatura:</h3><progress className={styles.progressValue} max="20" value={myPokemon[0].height}>Altura</progress></div>
           <div><h3>Peso:</h3><progress className={styles.progressValue} max="20" value={myPokemon[0].weight}>peso</progress></div>
           <div><h3>Ataque:</h3><progress className={styles.progressValue} max="100" value={myPokemon[0].attack}>ataque</progress></div>
           <div><h3>Defensa:</h3><progress className={styles.progressValue} max="100" value={myPokemon[0].defense}>defensa</progress></div>
           <div><h3>Velocidad:</h3><progress className={styles.progressValue} max="100" value={myPokemon[0].speed}>velocidad</progress></div>
           <div><h3>Salud:</h3><progress className={styles.progressValue} max="100" value={myPokemon[0].health}>salud</progress></div>
           </div>

           <div className={styles.imagen}><img src={require("./gifs/"+(myPokemon[0].name)+".gif").default || myPokemon[0].imagen} alt="joder"/></div>

           <div className={styles.tipos}>
               <div>{myPokemon[0].types}</div>
           </div>

           <div className={styles.buttonBox}>
           <Link classaName={styles.buttonVolver} to="/home"><button>VOLVER</button></Link>
           </div>
        </div> : <p>loading...</p>
    }
        </div>
    )
}

/*

{arrayTypes.map( (x) => <img src={require("./types/"+(x)+".gif").default || myPokemon[0].types } alt="joder"/>)} 



 <h3>Tipos:</h3>
           {myPokemon[0].types.map( ty => 
           <img src={require("./types/"+(ty)+".gif").default || ty } alt="joder" width="200px"/>)
            } 
<img src={myPokemon[0].image} alt=""  height="700px" /> */