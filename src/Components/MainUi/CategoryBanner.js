import React from 'react'
import {Link} from 'react-router-dom'



export const CategoryBanner = ({category, url}) => {
    return (
        <div className = 'main__bannerCard'>
            <Link to = {`/products/${url}`}>
            <h3>{category}</h3>
            <img src = {`../../Assets/${category}.jpg`} alt = {category}></img>
            </Link>
        </div>
    )
}
