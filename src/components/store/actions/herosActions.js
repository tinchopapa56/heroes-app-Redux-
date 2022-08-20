import axios from "axios"

export const herosRequest = () => ({
    type: "HEROS_REQUEST",
})
export const herosSuccess = data => (
    {
    type: "HEROS_SUCCESS",
    payload: data,
    }
)
export const herosFailure = error => ({
    type: "HEROS_FAILURE",
    payload:error,
})

export const getHeros = dispatch => {
    dispatch(herosRequest());

    const randomHero = Math.abs(Math.floor(Math.random()*1000-267) + 1);
    axios.get(`https://www.superheroapi.com/api.php/5264020983645129/125${randomHero}`) //pone el path aca¿¿¿
        .then(res=> res.json())
        .then(data => {
            dispatch(herosSuccess(data))
        })
        .catch(error => {
            dispatch(herosFailure(error))
        })
}

// export const getHeros = (path)=> dispatch => {
//     dispatch(herosRequest())

//     const randomHero = Math.abs(Math.floor(Math.random()*1000-267) + 1);
//     Axios.get(`https://www.superheroapi.com/api.php/5264020983645129/${randomHero}`) //pone el path aca¿¿¿
//         .then((res)=> res.json())
//         .then(data => dispatch(herosSuccess(data) ))
//         .catch(err=> dispatch(herosFailure(err) ))
// }