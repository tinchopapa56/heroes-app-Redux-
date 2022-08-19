import { TASKS_REQUEST, TASKS_SUCCESS, TASKS_FAILURE } from "../types"

const {REACT_APP_API_ENDPOINT: API_ENDPOINT} = process.env


export const heroesRequest = () => ({ type: TASKS_REQUEST, })
export const heroesSuccess = (data) => ({ 
    type: TASKS_SUCCESS,
    payload: data,
})
export const heroesFailure = (data) => ({ 
    type: TASKS_FAILURE,
    payload: err, 
})


export const getHeroes = (path) => dispatch => {
    dispatch(heroesRequest())
    fetch(`${API_ENDPOINT}/heroes/${path}`), {
        headers: {'Content-Type': 'application/json',
        Authorization: "Bearer " + localStorage.getItem('token')}
    }
    .then(res => res.json)
    .then(data => dispatch(heroesSuccess(data.result)))
    .catch (err => dispatch(heroesFailure(err)))
}