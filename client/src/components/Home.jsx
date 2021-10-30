import React from "react"
import { useState, useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { getPokemons, filterPokemonByType } from "../actions"
import {Link} from "react-router-dom"
import Card from "./Card"
import Paginado from "./Paginado"
import SearchBar from "./SearchBar"

export default function Home () {
    const dispatch = useDispatch()

    const allPokemons = useSelector((state)=> state.pokemons) // es como "MAP state to PROPS"
    
    //PAGINADO
    const [currentPage, setCurrentPage] = useState(1) //declaro estado local y paso pagina actual (la primera)
    const [pokemonsPerPage] = useState(9) // cantidad de pokes por pagina
    const indexLastPoke = currentPage * pokemonsPerPage
    const indexFirstPoke = indexLastPoke - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexFirstPoke, indexLastPoke)

    // aca hago el renderisado
    const paginado = (pageNumbers) => { 
        setCurrentPage(pageNumbers)
    }
    useEffect(()=> {
        dispatch(getPokemons())
    },[])
    
    function handleClick(e){
        e.preventDefault(); //es para que no vuelvan a cargarse estados por culpa de useEffect
        dispatch(getPokemons())
    }
    
    function handleFilterTypes(e) {
        e.preventDefault();
        dispatch(filterPokemonByType(e.target.value))
    }
 
    return (
    <div>
        <Link to="/pokemon">Creat your pokemon</Link>  
        <h1>LA ROMPE POKEMON</h1>
        <button onClick={(e) => {handleClick(e)}}>RECHARGE</button>
        <div>
<select onChange={e=> handleFilterTypes(e)}>
    <option value="All">todos</option>
    <option value="ice">hielo</option>
    <option value="fire">fuego</option>
</select>
            <Paginado pokemonsPerPage = {pokemonsPerPage} allPokemons = {allPokemons.length} paginado = {paginado} />
            <SearchBar/>
            {
                currentPokemons && currentPokemons?.map( el => {
                    return (
                        <div>
                        <Link to={"/home/" + el.id}>
                        <Card 
                        name = {el.name} 
                        height={el.height} 
                        weight={el.weight} 
                        speed={el.speed} 
                        attack ={el.attack}
                        health ={el.health}
                        image ={el.image} />
                        </Link> 
                    </div>  
                        )
                    })}
        </div>
    </div>
    )
    
}










   /*            
<option value="existing">existente</option>
<option value="created">creado</option>*/

















/*         <select>
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>  */
                        