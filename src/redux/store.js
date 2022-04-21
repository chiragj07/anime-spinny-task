import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from 'redux-logger';
import animeReducer from './anime/reducer';
import searchReducer from "./searchAnime/reducer";
import thunk from 'redux-thunk'
const reducer = combineReducers({
    anime: animeReducer,
    searchedAnime: searchReducer
})
const middleWares =[logger, thunk] ;

const store  = createStore(reducer, applyMiddleware(...middleWares));

export default store;