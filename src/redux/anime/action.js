import {ANIME_FETCH, ANIME_FETCH_FAILED, ANIME_FETCH_SUCCESS} from './types'


export const fetchAnime = (pageNumber) => {
    return async (dispatch) =>{
        dispatch({type: ANIME_FETCH});
        let url =  encodeURI(`https://api.jikan.moe/v3/search/anime?q=%3Cquery%3E&limit=16&page=${pageNumber}`)
        try{
            const res = await fetch(
               url
              );
              const data = await res.json();
            dispatch({
                type : ANIME_FETCH_SUCCESS,
                payload : {data: data.results, url, pageNumber}
            })
        }
        catch(err){
            dispatch({
                type : ANIME_FETCH_FAILED,
                payload : err.message
            })

        }
        
    }
}