// src/Routes/AppRoutes.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Homes/Home'; // Ajuste para a localização correta de Home se necessário
import Calculo from '../Pages/PageCalculo/Calculo';
import Financas from '../Pages/FuncoesFinanceira/Funcoes';
//import Produto from '../Pages/CadastroProduto/Produto';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculo" element={<Calculo />} />
            <Route path="/financas" element={<Financas/>} />
        </Routes>
    );
}

export default AppRoutes;
