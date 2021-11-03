import React from "react"
import styles from './Paginado.module.css'

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers = []
    const numberOfPages = Math.ceil(allPokemons/pokemonsPerPage)
    
    for(let i=1; i<=numberOfPages; i++) {
        pageNumbers.push(i)
    }

    return (
         <nav className={styles.paginado}> 
             <ul>
             {pageNumbers && pageNumbers.map((num) =>(<button onClick={(e) => paginado(num)}>{num}</button>)
         )}
         </ul>
         </nav>
            )
    }