import React from "react";
import styles from "./Card.module.css"
// imagenesTypes
import poison from "./types/poison.png"
import grass from "./types/grass.png"
import bug from "./types/bug.png"
import dark from "./types/dark.png"
import dragon from "./types/dragon.png"
import electric from "./types/electric.png"
import fairy from "./types/fairy.png"
import fighting from "./types/fighting.png"
import fire from "./types/fire.png"
import flying from "./types/flying.png"
import ghost from "./types/ghost.png"
import ground from "./types/ground.png"
import ice from "./types/ice.png"
import normal from "./types/normal.png"
import pshychic from "./types/pshychic.png"
import rock from "./types/rock.png"
import steel from "./types/steel.png"
import water from "./types/water.png"
//ImagenDefaul
import gifDefault from './imagenes/Default.gif'

export default function Card({name, image, types, id}) {
     //console.log(types)
     //if(id.length > 10) return image =require('./imagenes/Default.gif').default
     
     const arrayTypeImages = []
    
    if(types.includes('poison')) arrayTypeImages.push(poison)
    if(types.includes('grass') )arrayTypeImages.push(grass)
    if(types.includes('bug')) arrayTypeImages.push(bug)
    if(types.includes('dark') )arrayTypeImages.push(dark)
    if(types.includes('dragon')) arrayTypeImages.push(dragon)
    if(types.includes('electric') )arrayTypeImages.push(electric)
    if(types.includes('fairy')) arrayTypeImages.push(fairy)
    if(types.includes('fighting') )arrayTypeImages.push(fighting)
    if(types.includes('fire')) arrayTypeImages.push(fire)
    if(types.includes('flying') )arrayTypeImages.push(flying)
    if(types.includes('ghost')) arrayTypeImages.push(ghost)
    if(types.includes('ground') )arrayTypeImages.push(ground)
    if(types.includes('ice')) arrayTypeImages.push(ice)
    if(types.includes('normal') )arrayTypeImages.push(normal)
    if(types.includes('pshychic')) arrayTypeImages.push(pshychic)
    if(types.includes('rock') )arrayTypeImages.push(rock)
    if(types.includes('steel')) arrayTypeImages.push(steel)
    if(types.includes('water') )arrayTypeImages.push(water)


 return (
        <div className={styles.Card}>
        <div>
           <h4>{name.toUpperCase()}</h4>
           <img src={image || gifDefault}  className={styles.imagenPoke} alt='img not found' />
           
           {/* de type a image */}
           <div>
           {arrayTypeImages.map( (x) => <img src={x} className={styles.tipo} alt='img not found' />)}  
           </div>

           </div>
        </div>
    )
}
//(require("./gifs/"+(name)+".gif").default) 
/*  /*
    const typesNormalized = function(){
        if(id.length > 7) {
            return types.map((p) => p.name).join(",") }
        else return types.join(",")
    }*/
    //console.log(types)


