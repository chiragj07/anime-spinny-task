import {SEARCH_ANIME_FETCH, SEARCH_ANIME_FETCH_FAILED, SEARCH_ANIME_FETCH_SUCCESS,} from './types'
const initialState ={
    error:"",
    anime:[],
    loading: true,
    query:"",
    url:""
}

const searchReducer = (state= initialState, action)=>{
    switch(action.type){
        case SEARCH_ANIME_FETCH : return {
            ...state,
            loading: true
        }
        case SEARCH_ANIME_FETCH_SUCCESS : return {
            ...state,
            loading:false,
            anime:state.query === action.payload.query && action.payload.pageNumber !== 1 ?[...state.anime, ...action.payload.data] : action.payload.data,
            error:"",
            query: action.payload.query,
            url:action.payload.url
        }
        case SEARCH_ANIME_FETCH_FAILED : return {
            loading: false,
            error:action.payload.error
        }
        default : return state
    }
}
export default searchReducer  