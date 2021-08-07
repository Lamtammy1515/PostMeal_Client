import React from 'react'
import {Link} from "react-router-dom"

function SingleMeal(props) {
        return (
            <div>
                <div>Single Meal</div>
                <button><Link to="/api/v1/meals">BACK</Link></button>
            </div>
        )
    }



export default SingleMeal;