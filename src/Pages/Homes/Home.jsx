// src/Home/Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ajuste o caminho conforme necessário se o arquivo estiver em outro lugar

function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo ao Gerenciador de Cálculos</h1>
            <Link to="/calculo" >
                <button> Calculo Produto</button>
            </Link>
        </div>
    );
}

export default Home;
