import { combineReducers } from "redux";
import libraryReducer from "./libraires";
import frameworkReducer from "./frameworks";


export default combineReducers({
    libraryReducer,
    frameworkReducer
});