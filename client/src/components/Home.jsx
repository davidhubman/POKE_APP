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
    /*
    function handleFilterTypes(e) {
        e.preventDefault();
        dispatch(filterPokemonByType(e.target.value))
    }*/
 
    return (
    <div class>
        <Link to="/pokemon">Creat your pokemon</Link>  
        <h1>LA ROMPE POKEMON</h1>
        <button onClick={(e) => {handleClick(e)}}>RECHARGE</button>
        <div>
            <SearchBar/>
        </div>
        <div>
            <select>
                 <option value="asc">Ascendente</option>
                 <option value="desc">Descendente</option>
            </select>   
            <select>
                  <option value="All">Todos</option>
                  <option value="fighting">Peleador</option>
                  <option value="flying">Volador</option>
                  <option value="poison">Venenoso</option>
                  <option value="ground">Suelo</option>
                  <option value="rock">Piedra</option>
                  <option value="bug">Insecto</option>
                  <option value="ghost">Fantasma</option>
                  <option value="steel">Acero</option>
                  <option value="fire">Fuego</option>
                  <option value="water">Agua</option>
                  <option value="grass">Cesped</option>
                  <option value="electric">Electrico</option>
                  <option value="psychic">Psiquico</option>
                  <option value="dragon">Dragon</option>
                  <option value="dark">Oscuro</option>
                  <option value="fairy">Hada</option>
                  <option value="unknown">Desconocido</option>
                  <option value="shadow">Sombra</option>
            </select>
            <select>
                  <option value="All">Todos</option>          
                  <option value="created">Creado</option>
                  <option value="api">Existente</option>
            </select>
        </div>
        <div>
            <Paginado pokemonsPerPage = {pokemonsPerPage} allPokemons = {allPokemons.length} paginado = {paginado} />
            {
                currentPokemons && currentPokemons?.map( el => {
                    return (
                        <div>
                        <Link to={"/home/" + el.id}>
                        <Card 
                        id={el.id}
                        name={el.name}
                        height={el.height} 
                        weight={el.weight} 
                        speed={el.speed} 
                        attack ={el.attack}
                        health ={el.health}
                        image ={el.image}
                        types ={ el.types} />
                        </Link> 
                    </div>  
                        )
                    })}
        </div>
    </div>
    )
    
}


/*

<select onChange={e=> handleFilterTypes(e)}>
                  
                  
                
 
</select>*/
/* */















                        