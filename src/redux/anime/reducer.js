import {ANIME_FETCH, ANIME_FETCH_FAILED, ANIME_FETCH_SUCCESS, } from './types'
const initialState ={
    error:"",
    anime:[],
    loading: true,
    url:""
}

const animeReducer = (state= initialState, action)=>{
    switch(action.type){
        case ANIME_FETCH : return {
            ...state,
            loading: true
        }
        case ANIME_FETCH_SUCCESS : return {
            loading:false,
            anime:action.payload.pageNumber !== 1 ? [...state.anime, ...action.payload.data] : action.payload.data,
            error:"",
            url:action.payload.url
        }
        case ANIME_FETCH_FAILED : return {
            loading: false,
            error:action.payload,
            anime:[]
        }
        default : return state
    }
}
export default animeReducer