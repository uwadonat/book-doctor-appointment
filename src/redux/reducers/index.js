import { combineReducers } from "redux";
import { doctorReducer, productReducer } from "./doctorReducer";

const reducers = combineReducers({
    allDoctors: doctorReducer,
})