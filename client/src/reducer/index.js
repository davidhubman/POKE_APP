const initialState = {
    pokemons: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
            }
        case 'GET_NAME_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
            }
        case 'FILTER_BY_TYPE':
            const allPokemons = state.pokemons

            const typeFiltered =
                action.payload === 'All'
                    ? allPokemons
                    : allPokemons.filter((el) => el.type === action.payload)

            return {
                ...state,
                pokemons: typeFiltered,
            }
        default:
            return state
    }
}

export default rootReducer
