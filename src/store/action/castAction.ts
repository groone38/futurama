import axios from "axios";
import { Dispatch } from "redux"
import { CastAction, CastActionTypes } from "../../type/fetchType"

export const fetchCast = (params:string) => {
    return async(dispatch: Dispatch<CastAction>) => {
        try {
            dispatch({type: CastActionTypes.FETCH_CAST})
            const responce = await axios.get(`
                https://api.sampleapis.com/futurama/${params}
              `);
            dispatch({type: CastActionTypes.FETCH_CAST_SUCCESS, payload: responce.data})
        } catch(e) {
            dispatch({type: CastActionTypes.FETCH_CAST_ERROR, payload: 'Ошибка при загрузке'})
        }
    }
}