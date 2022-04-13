import { ICast } from "./type"

export enum CastActionTypes {
    FETCH_CAST = 'FETCH_CAST',
    FETCH_CAST_SUCCESS = 'FETCH_CAST_SUCCESS',
    FETCH_CAST_ERROR = 'FETCH_CAST_FETCH_CAST_ERROR'
}

export interface CastState  {
    cast: ICast[]
    loading: boolean
    error: null | string
}

interface FetchCastAction {
    type: CastActionTypes.FETCH_CAST
}

interface FetchCastSuccessAction {
    type: CastActionTypes.FETCH_CAST_SUCCESS
    payload: ICast[]
}

interface FetchCastErrorAction {
    type: CastActionTypes.FETCH_CAST_ERROR
    payload: string
}

export type CastAction = FetchCastAction | FetchCastSuccessAction | FetchCastErrorAction