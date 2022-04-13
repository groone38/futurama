import { CastAction, CastActionTypes, CastState } from "../../type/fetchType";

const initialState: CastState = {
    cast: [],
    loading: false,
    error: null    
}

export const castReducer = (state = initialState, action: CastAction) => {
    switch(action.type) {
        case CastActionTypes.FETCH_CAST:
            return {
                loading: true,
                error: null,
                cast: []
            }
        case CastActionTypes.FETCH_CAST_SUCCESS:
            return {
                loading: false,
                error: null,
                cast: action.payload
            }
        case CastActionTypes.FETCH_CAST_ERROR:
            return {
                loading: false,
                cast: [],
                error: action.payload
            }
        default:
            return state
    }
}