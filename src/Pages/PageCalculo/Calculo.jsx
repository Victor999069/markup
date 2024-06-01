// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './calculo.css'


const Calculo = () => {
    const [prccompra, setPrccompra] = useState('');
    const [perccustoaluguel, setPerccustoaluguel] = useState('');
    const [perccustofreteenvio, setPerccustofreteenvio] = useState('');
    const [perccustofretecompra, setPerccustofretecompra] = useState('');
    const [perccustogiro, setPerccustogiro] = useState('');
    const [perccustomarketing, setPerccustomarketing] = useState('');
    const [perccustoimposto, setPerccustoimposto] = useState('');
    const [percmarkup, setPercMarkup] = useState('');
    const [resultado, setResultado] = useState([]);
    const [total, setTotal] = useState(0);

    // Função para calcular algo com os valores
    const calcularPrec = () => {
        const compra = parseFloat(prccompra);
        const percaluguel = parseFloat(perccustoaluguel);
        if (!isNaN(compra) && !isNaN(percaluguel)){
            const resultadoAluguel = (compra * percaluguel) / 100;
            setResultado(prevResultado => [...prevResultado, `O seu aluguel sobre o valor do produto é R$ ${resultadoAluguel}`]);
            return resultadoAluguel;
        }
        else{
            setResultado(prevResultado => [...prevResultado, "Por favor, insira valores numéricos válidos nos campos."]);
            return 0;
        }
    };

    const calcularFreteEnvio = () => {
        const compra = parseFloat(prccompra);
        const percFreteEnvio = parseFloat(perccustofreteenvio);
        if (!isNaN(compra) && !isNaN(percFreteEnvio)){
            const resultadoFreteEnvio = (compra * percFreteEnvio) / 100;
            setResultado(prevResultado => [...prevResultado, `O seu frete de envio sobre o valor do produto é R$ ${resultadoFreteEnvio}`]);
            return resultadoFreteEnvio;
        }
        else{
            setResultado(prevResultado => [...prevResultado, "Por favor, insira valores numéricos válidos nos campos."]);
            return 0;
        }
    };

    const calcularFreteCompra = () => {
        const compra = parseFloat(prccompra);
        const percFreteCompr = parseFloat(perccustofretecompra);
        if (!isNaN(compra) && !isNaN(percFreteCompr)){
            const resultadoFreteCompra = (compra * percFreteCompr) / 100;
            setResultado(prevResultado => [...prevResultado, `O seu frete de compra sobre o valor do produto é R$ ${resultadoFreteCompra}`]);
            return resultadoFreteCompra;
        }
        else {
            setResultado(prevResultado => [...prevResultado, "Por favor, insira valores numéricos válidos nos campos."]);
            return 0;
        }
    };

    const calcularCustoGiro = () => {
        const compra = parseFloat(prccompra);
        const percCustoGiro = parseFloat(perccustogiro);
        if (!isNaN(prccompra) && !isNaN(percCustoGiro)) {
            const resultadoCustoGiro = (compra * percCustoGiro) / 100;
            setResultado(prevResultado => [...prevResultado, `O seu custo de giro sobre o valor do produto é R$ ${resultadoCustoGiro}`]);
            return resultadoCustoGiro;
        }
        else {
            setResultado(prevResultado => [...prevResultado, "Por favor, insira valores numéricos válidos nos campos."]);
            return 0;
        }
    };

    const calcularCustoMkt = () => {
        const compra = parseFloat(prccompra);
        const percCustoMkt = parseFloat(perccustomarketing);
        if (!isNaN(compra) && !isNaN(percCustoMkt)) {
            const resultadoCustoMkt = (compra * percCustoMkt) / 100;
            setResultado(prevResultado => [...prevResultado, `O seu custo de marketing sobre o valor do produto é R$ ${resultadoCustoMkt}`]);
            return resultadoCustoMkt;
        }
        else {
            setResultado(prevResultado => [...prevResultado, "Por favor, insira valores numéricos válidos nos campos."]);
            return 0;
        }
    };

    const calcularCustoImpos = () => {
        const compra = parseFloat(prccompra);
        const percCustoImpos = parseFloat(perccustoimposto);
        if (!isNaN(compra) && !isNaN(percCustoImpos)) {
            const resultadoCustoImpos = (compra * percCustoImpos) / 100;
            setResultado(prevResultado => [...prevResultado, `O seu custo de imposto sobre o valor do produto é R$ ${resultadoCustoImpos}`]);
            return resultadoCustoImpos;
        }
        else {
            setResultado(prevResultado => [...prevResultado, "Por favor, insira valores numéricos válidos nos campos."]);
            return 0;
        }
    };


    const calculoCompleto = () => {
        setResultado([]);
        const aluguel = calcularPrec();
        const frete_envio = calcularFreteEnvio();
        const frete_compra = calcularFreteCompra();
        const custo_giro = calcularCustoGiro();
        const custo_mkt = calcularCustoMkt();
        const custo_impo = calcularCustoImpos();
        const calculoTotal = aluguel + frete_envio + frete_compra + custo_giro + custo_mkt + custo_impo + parseFloat(prccompra);
        setTotal(calculoTotal);
        const calculoMarkupComple = (calculoTotal * parseFloat(percmarkup) / 100 + calculoTotal)
        setResultado(prevResultado => [...prevResultado, `O preço do produto mais os custos é R$ ${calculoTotal}`]);
        setResultado(prevResultado => [...prevResultado, `O preço do produto mais o markup é R$ ${calculoMarkupComple}`])
    };

    return (
        <div className="container">
            <div className="container-compra">
                <label htmlFor="prccompra">Preço Compra:</label>
                <input
                    type="number"
                    id="prccompra"
                    value={prccompra}
                    onChange={e => setPrccompra(e.target.value)}
                    required
                />
            </div>

            <div className="container-aluguel">
                <label htmlFor="perccustoaluguel">Percentual Aluguel:</label>
                <input
                    type="number"
                    id="perccustoaluguel"
                    value={perccustoaluguel}
                    onChange={e => setPerccustoaluguel(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="perccustofreteenvio">Percentual Frete Envio:</label>
                <input
                    type="number"
                    id="perccustofreteenvio"
                    value={perccustofreteenvio}
                    onChange={e => setPerccustofreteenvio(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="perccustofretecompra">Percentual Frete Compra:</label>
                <input
                    type="number"
                    id="perccustofretecompra"
                    value={perccustofretecompra}
                    onChange={e => setPerccustofretecompra(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="perccustogiro">Percentual Custo Giro:</label>
                <input
                    type="number"
                    id="perccustogiro"
                    value={perccustogiro}
                    onChange={e => setPerccustogiro(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="perccustomarketing">Percentual Custo Marketing:</label>
                <input
                    type="number"
                    id="perccustomarketing"
                    value={perccustomarketing}
                    onChange={e => setPerccustomarketing(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="perccustoimposto">Percentual Custo Imposto:</label>
                <input
                    type="number"
                    id="perccustoimposto"
                    value={perccustoimposto}
                    onChange={e => setPerccustoimposto(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="percmarkup">Percentual Markup</label>
                <input
                    type="number"
                    id="percmarkup"
                    value={percmarkup}
                    onChange={e => setPercMarkup(e.target.value)}
                    required
                />
            </div>
            <button onClick={calculoCompleto}>Calcular</button>
            <div>
                {resultado.map((resultados, index)=> (
                    <div key={index}>{resultados}</div>
                ))}
            </div>
        </div>
    );
};

export default Calculo;