import React from 'react';
import styled from '@emotion/styled';
import LogoReact from  '../img/ico2.png';
import LogoJS from '../img/ico3.png';
import LogoHtml from '../img/ico4.png';

const TituloDoc = styled.h1`
    text-align: center;
    font-family: 'Get Schwifty';
    text-transform: uppercase;
    font-size: 60px;
    color: #0FAAD5;
    -webkit-text-stroke: 1px #f5f5f5;

@media only screen and (max-width: 600px) {
  text-align: center;
  font-size: 2.5em;
}

span {
  color: #21d8ff;
}
`;

const TituloDos = styled.h2`
    text-align: center;
    font-family: 'Get Schwifty';
    text-transform: uppercase;
    font-size: 30px;
    color: #0FAAD5;
`;

const Doc = () => {
    return (
        <>
        <TituloDoc>Nosotros</TituloDoc>
            <section className="content who">
            <TituloDos>Proyecto Rick and Morty</TituloDos>
            <p>En este proyecto se lleva a cabo la maquetación de una página web, donde consiste en el consumo de una API de Ricky and Morty, se implementaron todos los conocimientos adquiridos durante el proceso de aprendizaje en la materia de Front End.</p>
            <p>
            Este es el resultado final, donde cada uno de los participantes aportamos el conocimiento y logramos llevar a cabo este proyecto con éxito.</p>
            </section>
            <section className="content who">
            <TituloDos>Construido con</TituloDos>
                <p>El siguiente proyecto que realizamos con la respectica API de Ricky and Morty, fue construido con las siguientes tecnologías de programación.</p>
                <ul className="list-services">
                    <li>
                        <figure>
                            <img src={LogoHtml} alt="Logo HTML" />
                            <figcaption>HTML</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={LogoReact} alt="Logo React" />
                            <figcaption>React</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={LogoJS} alt="Logo JavaScript" />
                            <figcaption>JavaScript</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Doc;