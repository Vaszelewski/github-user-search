import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/Buttonicon';
import './styles.scss';

const Home = () => (
    
    <div className="home-content">
        <h1 className="text-title">
            Desafio do Capítulo 3, < br/> Bootcamp DevSuperior
        </h1>
        <p className="text-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/> <br/>
            Favor observar as instruções passadas no capítulo sobre a <br/>
            elaboração deste projeto. <br/> <br/>
            Este design foi adaptado a partir de Ant Design System for Figma, de <br/>
            Mateusz Wierzbicki: <a href="link">antforfigma@gmail.com</a>
        </p>
        <Link to="/search">
            <ButtonIcon text="Começar"/>
        </Link>
    </div>
);

export default Home;