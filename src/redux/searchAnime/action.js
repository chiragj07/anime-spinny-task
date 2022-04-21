import {SEARCH_ANIME_FETCH, SEARCH_ANIME_FETCH_FAILED, SEARCH_ANIME_FETCH_SUCCESS} from './types'


export const fetchAnime = (pageNumber, query) => {
    return async (dispatch) =>{
        dispatch({type: SEARCH_ANIME_FETCH});
        console.log(query);
        let url =  encodeURI(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16 &page=${pageNumber}`)
        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: SEARCH_ANIME_FETCH_SUCCESS,
                payload: {
                    data : data.results,
                    query,
                    pageNumber,
                    url
                }
            })

        } catch(err){
            dispatch({
                type: SEARCH_ANIME_FETCH_FAILED,
                payload:{
                    error: err.message
                }
            })
        }
        
        
    }
}