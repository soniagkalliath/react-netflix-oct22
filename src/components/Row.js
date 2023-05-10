import React,{useEffect,useState} from 'react';
import instance from '../instance';
import './Row.css';

function Row({isPoster,title,fetchUrl}) {

    const [movies,setMovies] = useState([])
// backdrop_path
const base_url = "https://image.tmdb.org/t/p/original/";

const fetchData = async ()=>{
       const response = await instance.get(fetchUrl)
       setMovies(response.data.results);
    }
    useEffect(() => {    
        fetchData()
    }, [])
    // console.log(movies);
  return (
    <div className='row'> 
        <h2>{title}</h2> 
        <div className='movies_row'>
            {
                movies.map((movie)=>(
                    <img
                    className={`movie ${isPoster && 'movie_poster'}`}
                    src={`${base_url}${isPoster?movie.poster_path:movie.backdrop_path}`}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Row