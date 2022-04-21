import React, { useEffect, useState } from "react";
import Card from "../cardComponent/Card";
import Loader from "../Loader";
import {fetchAnime} from '../../redux/anime/action'
import {useSelector, useDispatch} from 'react-redux'

const MainSection = () => {
  const [pageNumber, setPageNumner] = useState(1);
  const {anime, loading} = useSelector(state => state.anime);
  const dispatch = useDispatch();
  useEffect(()=>{
    setPageNumner(1);
  },[])
  useEffect(()=>{ 
    dispatch(fetchAnime(pageNumber))
  },[pageNumber, dispatch]) 
  return (
    <div className="main-div">
      <div className="card-compenet">
        {anime.map((item) => (
          <Card key={item.mal_id} item={item} />
        ))}
      </div>
      { 
        !loading ? (<button
          className="btn-load"
          onClick={(e) => {
            setPageNumner(pageNumber => pageNumber + 1);
          }}
        >
          Load More..
        </button>) : (<Loader/>)
      }
      
    </div>
  );
};

export default MainSection;
