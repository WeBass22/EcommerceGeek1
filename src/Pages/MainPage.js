import React from "react";
import { CategoryBanner } from "../Components/MainUi/CategoryBanner";



import '../Styles/pages.css'

export const MainPage = () => {
    return (
         <>
        <div className = 'main__welcomeBanner'>
        <h1> Bienvenidos </h1> 
        </div>

        <div className = 'main__categoryBanner' >
        <CategoryBanner title = 'Mujeres' category = "mujerSeccion" url = "female" />
        <CategoryBanner title = 'Hombres' category = "hombresSeccion"url = "male" />
        </div>

        </>



    )
};