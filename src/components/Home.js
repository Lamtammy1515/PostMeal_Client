import React, { Component } from 'react'
import {Link} from "react-router-dom"

const Home = () => {
        return (
            <div>
                Home Page
                <br/><br/>
                <button><h1><Link to="/api/v1/meals">Click To See All Posts</Link></h1></button>
            </div>
        )
    }

export default Home; 