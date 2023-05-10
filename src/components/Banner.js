import React,{useEffect,useState} from 'react';
import './Banner.css';
import requests from '../request';
import instance from '../instance';

function Banner() {

    const [movie,setMovie] =useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData  = async ()=>{
      const response =  await instance.get(requests.fetchNetflixOriginals)
      setMovie(response.data.results[
        Math.floor(Math.random()*response.data.results.length)
      ]);
    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])
    function truncate(str,n){
     return str?.length>n?str?.substr(0,n-1)+'...':str;
    }
  return (
    <div 
    className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}${movie?.backdrop_path})`
    }}
    >
      <div className='banner_content'>
          <h1 className='banner_title'>
            {movie?.name}
          </h1>

          <h2 className='banner_overview'> {truncate(movie?.overview,200)} </h2>

      </div>

    </div>
  )
}

export default Banner