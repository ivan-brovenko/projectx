import {combineReducers} from 'redux';
import linkToggleReducer from "./reducers/linkToggleReducer";

const reducersCombination = combineReducers({
    linkToggleReducer
});

export default reducersCombination;