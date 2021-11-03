import axios from 'axios'

export function getPokemons() {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/pokemons')
            //console.log(json.data)
            return dispatch({
                type: 'GET_POKEMONS',
                payload: json.data,
            })
        } catch (err) {
            console.log(err)
        }
    }
}
//para el SEARCH
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
export function postPokemon(payload) {
    return async function (dispatch) {
        try {
            console.log('soy payload de action', payload)
            const created = await axios.post(
                'http://localhost:3001/pokemons',
                payload
            )
            //console.log(created)
            return created
        } catch (err) {
            console.log(err)
        }
    }
}

export function getTypes() {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/types', {})

            return dispatch({ type: 'GET_TYPES', payload: json.data })
        } catch (err) {
            console.log(err)
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/pokemons/' + id)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data,
            })
        } catch (err) {
            console.log(err)
        }
    }
}
/*
export function filterByType(payload) {
    return {
        type: 'FILTER_BY_TYPE',
        payload,
    }
}*/
