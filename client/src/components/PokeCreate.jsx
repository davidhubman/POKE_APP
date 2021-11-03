import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {postPokemon, getTypes} from "../actions/index"
import { useDispatch, useSelector } from "react-redux";
import styles from "./PokeCreate.module.css"

export default function PokeCreate(){
    const dispatch = useDispatch()
    const history = useHistory()

    //const type = useSelector((state) => state.types)

    const [input, setInput] = useState({
        id: "",
        name: "",
        height: "",
        weight: "",
        image:"",
        attack: "",
        defense: "",
        speed: "",
        health: "",
        type:[], 
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleCheck(e) {
        if (e.target.checked){ 
            console.log(e.target.value)

            setInput({
                ...input,
                type: [...input.type, {name: e.target.value}]
            })
        }
    }
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPokemon(input))
        alert("Felicitaciones!! Creaste un pokemon")
        history.push("/home")
    }

    /*setInput({
        name: "",
        height: "",
        weight: "",
        image:"",
        attack: "",
        defense: "",
        speed: "",
        health: "",
        type:[], 
    })*/

    useEffect(()=> {
        dispatch(getTypes());
    }, []);

    return(
        <div className={styles.fondo}>
            <Link to ="/home"><button>RETURN</button></Link>
            <h1>CREA TU POKEMON</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
              <div>
                  <label>Nombre:</label>
                  <input 
                  type="text"
                  value={input.name}
                  name = "name"
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>Altura:</label>
                  <input 
                  name = "height"
                  type="range"
                  min="1"
                  max ="100"
                  value={input.height}
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>Peso:</label>
                  <input 
                  name = "weight"
                  type="range"
                  min="1"
                  max ="100"
                  value={input.weight}
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>Velocidad:</label>
                  <input 
                  name = "speed"
                  type="range"
                  min="1"
                  max ="100"
                  value={input.speed}
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>Ataque:</label>
                  <input 
                  name = "attack"
                  type="range"
                  min="1"
                  max ="100"
                  value={input.attack}
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>salud:</label>
                  <input 
                  name = "health"
                  type="range"
                  min="1"
                  max ="100"
                  value={input.health}
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>Defensa:</label>
                  <input 
                  name = "defense"
                  type="range"
                  min="1"
                  max ="100"
                  value={input.defense}
                  onChange = {(e)=>{handleChange(e)}}
                  />
              </div>
              <div>
                  <label>TIPO:</label>
                  <div>
                  <label><input type="checkbox"value="ice" name = "ice" onChange={(e)=>handleCheck(e)}/>Hielo</label>
                  <label><input type="checkbox" value="normal" name = "normal" onChange={(e)=>handleCheck(e)}/>Normal</label>
                  <label><input type="checkbox"value="fighting" name = "fighting" onChange={(e)=>handleCheck(e)}/>Peleador</label>
                  <label><input type="checkbox" value="flying" name = "flying" onChange={(e)=>handleCheck(e)}/>Volador</label>
                  <label><input type="checkbox"value="poison" name = "poison" onChange={(e)=>handleCheck(e)}/>Venenoso</label>
                  <label><input type="checkbox" value="ground" name = "ground" onChange={(e)=>handleCheck(e)}/>Suelo</label>
                  <label><input type="checkbox"value="rock" name = "rock" onChange={(e)=>handleCheck(e)}/>Piedra</label>
                  <label><input type="checkbox" value="bug" name = "bug" onChange={(e)=>handleCheck(e)}/>Insecto</label>
                  <label><input type="checkbox"value="ghost" name = "ghost" onChange={(e)=>handleCheck(e)}/>Fantasma</label>
                  <label><input type="checkbox" value="steel" name = "steel" onChange={(e)=>handleCheck(e)}/>Acero</label>
                  <label><input type="checkbox"value="fire" name = "fire" onChange={(e)=>handleCheck(e)}/>Fuego</label>
                  <label><input type="checkbox" value="water" name = "water" onChange={(e)=>handleCheck(e)}/>Agua</label>
                  <label><input type="checkbox"value="grass" name = "grass" onChange={(e)=>handleCheck(e)}/>Cesped</label>
                  <label><input type="checkbox" value="electric" name = "electric" onChange={(e)=>handleCheck(e)}/>Electrico</label>
                  <label><input type="checkbox"value="psychic" name = "psychic" onChange={(e)=>handleCheck(e)}/>Psiquico</label>
                  <label><input type="checkbox" value="dragon" name = "dragon" onChange={(e)=>handleCheck(e)}/>Dragon</label>
                  <label><input type="checkbox"value="dark" name = "dark" onChange={(e)=>handleCheck(e)}/>Oscuro</label>
                  <label><input type="checkbox" value="fairy" name = "fairy" onChange={(e)=>handleCheck(e)}/>Hada</label>
                  <label><input type="checkbox"value="unknown" name = "unknown" onChange={(e)=>handleCheck(e)}/>Desconocido</label>
                  <label><input type="checkbox" value="shadow" name = "shadow" onChange={(e)=>handleCheck(e)}/>Sombra</label>
                  </div>
              </div>
             
             <button type= "submit" >CREAR POKEMON</button>

            </form>
            
        </div>
    )
} 