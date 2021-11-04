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
            action.payload.map((x) => {
                if (x.id.length > 7) {
                    return (x.types = x.types.map((p) => p.name).join(','))
                } else return (x.types = x.types.join(','))
            }) //normalizoTypesAstrings
            //console.log(action.payload)
            return {
                ...state,
                pokemons: action.payload,
                //allPokemons: action.payload,
            }
        //serchbar
        case 'GET_NAME_POKEMONS':
            action.payload.map((x) => {
                if (x.id.length > 7) {
                    return (x.types = x.types.map((p) => p.name).join(','))
                } else return (x.types = x.types.join(','))
            }) // normalizer
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
        //DETAILS
        case 'GET_DETAILS':
            action.payload.map((x) => {
                if (x.id.length > 7) {
                    return (x.types = x.types.map((p) => p.name).join(','))
                } else return (x.types = x.types.join(','))
            }) //normalizoTypesAstrings
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
