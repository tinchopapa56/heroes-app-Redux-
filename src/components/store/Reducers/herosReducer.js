import { HEROS_REQUEST, HEROS_SUCCESS, HEROS_FAILURE } from "../types"

const initialState = {
    loading:false,
    heroTeam:[] , //array de objetos
    error: "",
}

export const herosReducer = (state = initialState, action) => {
    switch(action.type) {
        case HEROS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case HEROS_SUCCESS:
            return{
                ...state,
                heroTeam: action.payload,
                error: "",
            }
        case HEROS_FAILURE:
        return{
            loading:false,
            error: action.payload,
            heroTeam: [],
        }
    
    default:
        return state
    }
}