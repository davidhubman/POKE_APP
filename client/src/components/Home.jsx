import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, filterByType, filterByCreated, orderByName } from '../actions'
import { Link } from 'react-router-dom'
import Card from './Card'
import Paginado from './Paginado'
import SearchBar from './SearchBar'
// estilos
import imagen from '../components/imagenes/pokedexFINAL.png'
import styles from './Home.module.css'

export default function Home() {
    
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons) // es como "MAP state to PROPS" 

    //PAGINADO
    const [currentPage, setCurrentPage] = useState(1) //declaro estado local y paso pagina actual (la primera)
    const [pokemonsPerPage] = useState(9) // cantidad de pokes por pagina
    const indexLastPoke = currentPage * pokemonsPerPage
    const indexFirstPoke = indexLastPoke - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexFirstPoke, indexLastPoke)
    //ORDENADO
    const [order, setOrder] = useState('') 

    // aca hago el renderisado
    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }
    useEffect(() => {
        dispatch(getPokemons())
    },[])

    function handleClick(e) {
        e.preventDefault() //es para que no vuelvan a cargarse estados por culpa de useEffect
        dispatch(getPokemons())
    }
    
    function handleFilterType(e) {
        //console.log(e.target.value)
        dispatch(filterByType(e.target.value))
    }
    function handleFilterCreated(e) {
     dispatch(filterByCreated(e.target.value))
    }
    function handleSort(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
       setOrder(`Ordenado ${e.target.value}`)
       //console.log(order)
    }

    return (
        <div> 
        { allPokemons.length > 0 ? 
           <div className={styles.background}>
            <div className={styles.boxButtons}>
            <Link to="/pokemon">
                <button className={styles.button}>CREA TU POKEMON!</button>
            </Link>
            <img src={imagen} alt="joder" width="500px" height="200px" />
            <button
                className={styles.button}
                onClick={(e) => {
                    handleClick(e)
                }}
            >
                RECHARGE
            </button>
            <div className={styles.searchBar}>
                <SearchBar />
            </div>
            <div className={styles.filtersBox}>
                <select onChange={(e)=> handleSort(e)}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                    <option value="attack">Por ataque</option>
                </select>

<select onChange={(e)=> handleFilterType(e)}>
      <option value="All">Por tipo</option>
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
                <select onChange={(e)=> handleFilterCreated(e)}>
                    <option value="All">Todos</option>
                    <option value="created">Creado</option>
                    <option value="api">Existente</option>
                </select>
            </div>
            <div>
                <Paginado
                    pokemonsPerPage={pokemonsPerPage}
                    allPokemons={allPokemons.length}
                    paginado={paginado}
                />
            </div>
            </div> 

            <div className={styles.segundoBack}>
                <div className={styles.boxCard}>
                    {currentPokemons &&
                        currentPokemons?.map((el) => {
                            return (
                                <div>
                                    <Link to={'/home/' + el.id}>
                                        <Card
                                            id={el.id}
                                            name={el.name}
                                            height={el.height}
                                            weight={el.weight}
                                            speed={el.speed}
                                            attack={el.attack}
                                            health={el.health}
                                            image={el.image}
                                            types={el.types}
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div> : <div>loading...</div>
}
    </div>
    )
}

/*

<select onChange={e=> handleFilterTypes(e)}>



 
</select>*/
/* */
