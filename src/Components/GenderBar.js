import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/genderbar.css'
import '../Styles/pages.css'

export const GenderBar = () => {
    return (
        <nav className = 'product__nav'>
            <ul>
                <li><Link to = 'products/male'>Hombres</Link></li>
                <li><Link to = 'products/female'>Mujeres</Link></li>
            </ul>
        </nav>
    )
}
