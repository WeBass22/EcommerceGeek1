import React from 'react'
import {Link} from 'react-router-dom'




export const CategoryBanner = ({title, category, url}) => {
    return (
        <div className = 'main__bannerCard'>
            <Link to = {`/products/${url}`}>
            <h3>{title}</h3>
            </Link>
            <img src = {`../Assets/${category}.jpg`} alt = {category}/>
        </div>
    )
}
