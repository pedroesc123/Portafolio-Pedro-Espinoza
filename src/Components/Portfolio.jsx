import React from "react";
import twitter from '../img/logo-twitter.jpg'
import paises from '../img/banderas-paises.jpg'
import '../Styles/Portfolio.css'
import { Link } from "react-router-dom";


const Portfolio = () => {
    return(
        <div className="portfolio">
            <h1>Proyectos realizados con JavaScript y React</h1>
            <div className="proyect-container">
                <div className="card-container">
                    <h1>
                        <Link to='/countries'>
                            Info de Paises
                        </Link>
                    </h1>
                    <img src={paises} alt="Imagen del proyecto" />
                    <p>En esta aplicación se extrajo la información de una API y se mostro a todos los países con algunas características de ellos, además de mostrarnos un ranking de los que presentan mayor población.</p>
                </div>
                <div className="card-container">
                    <h1>Project 1</h1>
                    <img src={twitter} alt="Imagen del proyecto" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi nobis fuga beatae praesentium tenetur reiciendis.</p>
                </div>
                <div className="card-container">
                    <h1>Project 1</h1>
                    <img src={twitter} alt="Imagen del proyecto" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi nobis fuga beatae praesentium tenetur reiciendis.</p>
                </div>
                <div className="card-container">
                    <h1>Project 1</h1>
                    <img src={twitter} alt="Imagen del proyecto" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi nobis fuga beatae praesentium tenetur reiciendis.</p>
                </div>
                <div className="card-container">
                    <h1>Project 1</h1>
                    <img src={twitter} alt="Imagen del proyecto" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi nobis fuga beatae praesentium tenetur reiciendis.</p>
                </div>
                <div className="card-container">
                    <h1>Project 1</h1>
                    <img src={twitter} alt="Imagen del proyecto" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi nobis fuga beatae praesentium tenetur reiciendis.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;