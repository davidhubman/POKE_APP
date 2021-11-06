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
                allPokemons: action.payload,
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
        //filtro/*
        case 'FILTER_BY_TYPE':
            const allPokemons = state.allPokemons
            //console.log(allPokemons)

            const typeFiltered =
                action.payload === 'All'
                    ? allPokemons
                    : allPokemons.filter((el) =>
                          el.types.includes(action.payload)
                      )
            //console.log(typeFiltered)
            return {
                ...state,
                pokemons: typeFiltered,
            }
        case 'FILTER_BY_CREATED':
            const filterCreated =
                action.payload === 'created'
                    ? state.allPokemons.filter((el) => el.id.length > 10)
                    : state.allPokemons.filter(
                          (el) => el.id.toString().length < 4
                      )
            return {
                ...state,
                pokemons:
                    action.payload === 'All'
                        ? state.allPokemons
                        : filterCreated,
            }
        case 'ORDER_BY_NAME':
            let arrayOrder =
                action.payload === 'asc'
                    ? state.pokemons.sort(function (a, b) {
                          if (a.name > b.name) {
                              return 1
                          }
                          if (a.name < b.name) {
                              return -1
                          }
                          return 0
                      })
                    : state.pokemons.sort(function (a, b) {
                          if (a.name > b.name) {
                              return -1
                          }
                          if (a.name < b.name) {
                              return 1
                          }
                          return 0
                      })
            return {
                ...state,
                pokemons: arrayOrder,
            }
        default:
            return state
    }
}

export default rootReducer
