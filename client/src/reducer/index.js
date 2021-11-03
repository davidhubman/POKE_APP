const initialState = {
    pokemons: [],
    allPokemons: [], //para renovar filtro
    detail: [],
    types: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        //home
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        //serchbar
        case 'GET_NAME_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
            }
        //pokecreate
        case 'POST_POKEMON':
            return {
                ...state,
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload,
            }
        case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload,
            }
        /* //filtro/*
        case 'FILTER_BY_TYPE':
            const allPokemons = state.allPokemons
            const typeFiltered =
                action.payload === 'All'
                    ? allPokemons
                    : allPokemons.filter((el) => el.type === action.payload)

            return {
                ...state,
                pokemons: typeFiltered,
            }*/
        default:
            return state
    }
}

export default rootReducer
