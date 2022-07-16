import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { StateCall } from '../ContextApi'



const Base_url = "https://api.themoviedb.org/3"
const API_KEY = "api_key=5c6b23821d023ab10246fe3dbe66aa2a"
const API_URL = Base_url + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const SEARCH_URL = Base_url+"/search/movie?" +API_KEY




const MoviesContainer = () => {
    
    const {searchData , SetSearchData} = StateCall()
    const [Movies, SetMovies] = useState([])
    


    const FetchTopMovies = async () => {
        const {data} = await axios.get(API_URL)
        // console.log(data.results)
        SetMovies(data.results)
    }

    const SearchMovies = async () => {
        const {data} = await axios.get(SEARCH_URL + "&query=" + searchData)
        console.log(data.results)
        SetMovies(data.results)
    }

    useEffect(() => {
           FetchTopMovies()
      }, []);


    useEffect(() => {
        SearchMovies()
      }, [searchData]);






    return (
        <div style={{ minHeight: "92vh", height: "auto" }} className='bg-dark'>
            <div className='pt-5 container '>
                <div className='row  '>

                {
                    Movies.map((movie)=>{
                         
                        const {poster_path, title ,  vote_average , vote_count} = movie; 
                         
                        return (
                            <div key={vote_count} className='col-md-3 d-flex justify-content-center pb-5' >
                            <div className="card"  style={{ width: "18rem" ,  padding: "10px" }}>
                                <img src={IMAGE_URL + poster_path} className="card-img-top" alt="..." />
                                <div style={{display: "flex", justifyContent: "space-between" , paddingTop: "10px" }}>
                                    <h5 className="card-title">{title}</h5>
                                    <h5 className="card-title"><span className="badge bg-secondary">{vote_average}</span></h5>
                                </div>
    
    
                            </div>
                        </div>
                        )

                        

                        
                    })
                }


  












                </div>
            </div>
        </div>
    )
}

export default MoviesContainer
