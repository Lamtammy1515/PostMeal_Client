import React, { Component } from 'react'
import {Link} from "react-router-dom"

const Home = () => {
        return (
            <div>
                Home Page
                <br/><br/>
                <button class="button button2"><h3><Link to="/api/v1/meals">ALL MEAL POSTS</Link></h3></button>
            </div>
        )
    }

export default Home; 