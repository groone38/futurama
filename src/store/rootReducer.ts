import { combineReducers } from "redux";
import { castReducer } from "./reducer/CastReducer";

export const rootReducer = combineReducers({
    cast: castReducer,
})

export type RootState = ReturnType<typeof rootReducer>