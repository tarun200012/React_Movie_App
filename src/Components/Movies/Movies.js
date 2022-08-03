import React, { useContext, useEffect , useState } from "react";
import { AppContext } from "../../Context/SearchContext";
import Movie from "../Movie/Movie";

const API_KEY= "cdbeaa06";
// let series = [];
export default function(){
    const [movies,setMovies]= useState([]);
    const [series,setSeries]= useState([]);

    const {state,setState,isLoading,setIsLoading}= useContext(AppContext);


    useEffect(  ()=>{
        setSeries(state);
        const promises= series.map( s => {
         setIsLoading(true);       
         return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${s}`)
         .then(res =>{
            setIsLoading(false);
            return res.json()
         })
        //  .then(res => console.log(res.Search));
        });
        Promise.all(promises).then(movie => {
            // // console.log("resolved movie", movie);
            //     // setMovies(movie);
            //     movie.map(currentMovie =>{
            //         console.log(currentMovie);
            //     })
            setMovies(movie.map(currentMovie => currentMovie.Search));
        });


        // fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=avengers`)
        // .then(res =>res.json());
        // .then(res => console.log(res));
    },[state,series]);
    // console.log(movies);
    return (
        <div className="movies">
           {

            movies.flat(2).map(movie =>{
                // console.log(movie);
                return (movie && <Movie key={movie.imdbID} title={movie.Title} image={movie.Poster} year={movie.Year} />)
                // return <div><img src="{movie.Poster}"/></div>
            })
           }
          
          State is {state} 
        </div>
    );
}