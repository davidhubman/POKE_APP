import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";

export default function SearchBar() {
     const dispatch= useDispatch()
     const [name, setName] = useState("")
     //ACAS LA LOGICA
     function handleInputChange(e) {
         e.preventDefault()
         setName(e.target.value)
         console.log(name)
     }

     function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
     }

     return (
         <div>
             <input 
             type = 'text'
             placeholder = "buscar..."
             onChange = { (e) => handleInputChange(e)}
             />
             <button type ='submit' onClick= {(e)=>handleSubmit(e)}>SEARCH</button>
         </div>
     )

}