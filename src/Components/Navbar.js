import React, { useState } from 'react'
import {StateCall} from "../ContextApi"

const Navbar = () => {


    const {SetSearchData} = StateCall()
    const [Query, SetQuery] = useState("")

   
    const handleChange = (e) =>{
        const data = e.target.value
        SetQuery(data)
    }
 

    const handleSubmit = (e)=>{
        e.preventDefault();
        SetSearchData(Query)
    }

    return (

        <nav style={{backgroundColor: "#1a1717"}} className="navbar">
            <div className="container-fluid">
                <a  className="text-danger ms-2 fs-3 fw-bold navbar-brand">Movie-Flex</a>
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={Query} className="form-control me-2" type="search" placeholder="Search For Movies" aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default Navbar
