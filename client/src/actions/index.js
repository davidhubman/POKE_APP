import axios from 'axios'

export function getPokemons() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons')

        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data,
        })
    }
}

export function getNamePokemons(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(
                'http://localhost:3001/pokemons?name=' + name
            )
            return dispatch({
                type: 'GET_NAME_POKEMONS',
                payload: json.data,
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function filterPokemonByType(payload) {
    return {
        type: 'FILTER_BY_TYPE',
        payload,
    }
}
