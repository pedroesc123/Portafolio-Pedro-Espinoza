import React from "react";
import profile from '../img/profile-image.jpg'
import twitter from '../img/logo-twitter.jpg'
import linkedin from '../img/Logo-linkedin.jpg'
import github from '../img/logo-github.png'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className="home-page">
            <div className="description">
                <img src= {profile} alt="Imagen de perfil" />
                <h1>Pedro Espinoza Cordero</h1>
                <p>Web Developer</p>
                <button type="button">Email me</button>
                <div>
                    <a href="https://www.linkedin.com/in/pedro-espinoza-cordero-b991321b9/" target="_blank"><img src= {linkedin} alt="Linkedin" /></a>
                    <a href="https://twitter.com/pedroesc9905" target="_blank"><img src= {twitter} alt="Twitter" /></a>
                    <a href="https://github.com/pedroesc123" target="_blank"><img src= {github} alt="Github" /></a>
                </div>
            </div>
            <div className="about-me">
                <h1>About me</h1>
                <p>I am a tech-savvy individual with a Bachelor's degree in Electronic Engineering, seeking employment as a frontend developer. <br />I'm passionate about consistently advancing my knowledge and skills.</p>
                <div>
                    <button type="button">
                        <Link to="/resume" className="resume">
                            Resume
                        </Link>
                    </button>
                    <button type="button">
                        <Link to="/portfolio" className="go-portfolio">
                            Portfolio
                        </Link>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Home;