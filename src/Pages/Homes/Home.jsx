// src/Home/Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo ao Gerenciador de Cálculos</h1>
            <Link to="/calculo" >
                <button> Calculo Produto</button>
            </Link>
            <Link to= "/financas">
                <button>Entenda Sobre Finanças</button>
            </Link>
        </div>
    );
}

export default Home;
