import React from "react";
import '../Styles/Resume.css';
import profile from '../img/profile-image.jpg'

const Resume = () => {
    return(
        <div className="container">
            <div className="left">
                <div className="presentation">
                    <img src={profile} alt="Imagen de perfil" />
                    <p>Soy una persona proactiva, organizada y responsable. En constante formación en todo lo correspondiente al mundo de la programación. <br />Me interesa la tecnología, me gustan los retos, y nunca parar de aprender.</p>
                </div>
                <div className="contact">
                    <h1>Contacto</h1>
                    <p>Celular: 992313757</p>
                    <p>Correo: pedroesc.9905@gmail.com</p>
                    <p>Linkedin: @Pedro Espinoza Cordero</p>
                    <p>Twitter: @pedroesc9905</p>
                    <p>Localidad: Lima, Perú</p>
                </div>
                <div className="education">
                    <h1>Educación</h1>
                    <h3>Universidad Nacional de Ingeniería <br />Bachiller en Ing. Electrónica, 2022</h3>
                    <p>-Perteneciente al 5to superior</p>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h1>PEDRO ESPINOZA CORDERO</h1>
                    <p>BACHILLER EN INGENIERIA ELECTRONICA</p>
                </div>
                <div className="experience">
                    <h1>Experiencia laboral</h1>
                    <h3>Practicante en el área de mantenimiento eléctrico y de sistemas</h3>
                    <h3>CIA Minera e Industrial Sagitario S.A. , Abril 2021 - Diciembre 2021</h3>
                    <p>- Diseño e implementación, mediante los lenguajes Python y JavaScript, de un programa que permita calcular el peso de un ladrillo en cada etapa (húmedo, semi seco, seco y cocido) y el tiempo de vida del molde correspondiente a la producción de ese tipo de ladrillo.</p>
                    <p>- Apoyo en el diseño de una interfaz para presentar los datos usando HTML, CSS, Javascript y Flask.</p>
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Ingles intermedio / avanzado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;