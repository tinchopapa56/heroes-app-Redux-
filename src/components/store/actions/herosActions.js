import axios from axios
import { HEROS_REQUEST, HEROS_SUCCESS, HEROS_FAILURE } from "../types"

export const herosRequest = ()=> ({
    type: HEROS_REQUEST
})
export const herosSuccess = (data)=> (
    {
    type: HEROS_SUCCESS,
    payload: data,
    }
)
export const herosFailure = (err)=> ({
    type: HEROS_FAILURE,
    payload:err
})

export const getHeros = (path)=> dispatch => {
    dispatch(herosRequest())

    const randomHero = Math.abs(Math.floor(Math.random()*1000-267) + 1);
    axios.get(`https://www.superheroapi.com/api.php/5264020983645129/${randomHero}`) //pone el path aca¿¿¿
        .then((res)=> res.json())
        .then(data => dispatch(herosSuccess(data) ))
        .catch(err=> dispatch(herosFailure(err) ))
}