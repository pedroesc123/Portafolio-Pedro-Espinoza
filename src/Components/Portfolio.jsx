import React from "react";
import twitter from '../img/logo-twitter.jpg'
import paises from '../img/banderas-paises.jpg'
import todoList from '../img/Lista-de-tareas.jpg'
import '../Styles/Portfolio.css'
import { Link } from "react-router-dom";


const Portfolio = () => {
    return(
        <div className="portfolio">
            <h1 className="main-title-portfolio">Proyectos realizados con JavaScript y React</h1>
            <div className="proyect-container">
                <div className="card-container">
                    <h1>
                        <Link to='/countries'>
                            Info de Paises
                        </Link>
                    </h1>
                    <img src={paises} alt="Imagen del proyecto de paises" />
                    <p>En esta aplicación se extrajo la información de una API y se mostro a todos los países con algunas características de ellos, además de mostrarnos un ranking de los que presentan mayor población.</p>
                </div>
                <div className="card-container">
                    <h1>
                        <Link to='/todo'>
                            Todo App
                        </Link>
                    </h1>
                    <img src={todoList} alt="Imagen del proyecto de Todo App" />
                    <p>En esta aplicación podremos crear una lista de tareas simple, en la cual podremos ver que tareas estan en curso y cuales ya fueron completadas, ademas que podremos filtrar las tareas en curso y eliminar las tareas ya terminadas.</p>
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