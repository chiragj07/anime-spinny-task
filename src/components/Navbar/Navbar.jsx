import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {fetchAnime} from '../../redux/searchAnime/action'
const Navbar = () => {
    const dispatch= useDispatch();
    const state = useSelector(state => state);
    const [inputValue, setInputValue] =useState("");
  return (
     <div className='navbar-container'>
      <div className='input-container'>
        <input class="input-field" value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)}></input>
        <button onClick = {()=> dispatch(fetchAnime(1,inputValue))}>GO</button>
      </div>
      <div className='url'> <b>Requesting : </b>{state.searchedAnime.query ?  state.searchedAnime.url : state.anime.url} </div>
     </div>
   
  )
}

export default Navbar