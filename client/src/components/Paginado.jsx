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
             <ul className={styles.botonPaginado}>
             {pageNumbers && pageNumbers.map((num) =>(<button className={styles.botonPaginado} onClick={(e) => paginado(num)}>{num}</button>)
         )}
         </ul>
         </nav>
            )
    }