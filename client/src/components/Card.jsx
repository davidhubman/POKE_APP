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
    
    console.log(types)
    
    const typesNormalized = function(){
        if(id.length > 7) {
            return types.map((p) => p.name).join(",") }
        else return types.join(",")
    }
    console.log(typesNormalized())


    const arrayTypeImages = []
    
    if(typesNormalized().includes('poison')) arrayTypeImages.push(poison)
    if(typesNormalized().includes('grass') )arrayTypeImages.push(grass)
    if(typesNormalized().includes('bug')) arrayTypeImages.push(bug)
    if(typesNormalized().includes('dark') )arrayTypeImages.push(dark)
    if(typesNormalized().includes('dragon')) arrayTypeImages.push(dragon)
    if(typesNormalized().includes('electric') )arrayTypeImages.push(electric)
    if(typesNormalized().includes('fairy')) arrayTypeImages.push(fairy)
    if(typesNormalized().includes('fighting') )arrayTypeImages.push(fighting)
    if(typesNormalized().includes('fire')) arrayTypeImages.push(fire)
    if(typesNormalized().includes('flying') )arrayTypeImages.push(flying)
    if(typesNormalized().includes('ghost')) arrayTypeImages.push(ghost)
    if(typesNormalized().includes('ground') )arrayTypeImages.push(ground)
    if(typesNormalized().includes('ice')) arrayTypeImages.push(ice)
    if(typesNormalized().includes('normal') )arrayTypeImages.push(normal)
    if(typesNormalized().includes('pshychic')) arrayTypeImages.push(pshychic)
    if(typesNormalized().includes('rock') )arrayTypeImages.push(rock)
    if(typesNormalized().includes('steel')) arrayTypeImages.push(steel)
    if(typesNormalized().includes('water') )arrayTypeImages.push(water)

 return (
        <div className={styles.Card}>
        <div>
           <h3>{name.toUpperCase()}</h3>

           {/* de type a image */}
           <div>
           {arrayTypeImages.map( (x) => <img src={x} className="card-header" alt='img not found' width= '70px' height='110px'/>)}  
           </div>
           {/* de API  DB */}

           <img src={image || gifDefault }  className="card-header" alt='img not found' width= '200px' height='250px'/>
           </div>
        </div>
    )
}

