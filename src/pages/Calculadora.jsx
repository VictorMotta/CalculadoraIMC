import { useEffect, useState } from "react";
import styled from "styled-components";
import Grau from "../components/Grau";

export default function Calculadora() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setIMC] = useState("");
    const [toggleDisable, setToggleDisable] = useState(false);

    useEffect(() => {
        if (!altura || !peso) {
            setToggleDisable(true);
            return;
        }
        setToggleDisable(false);
    }, [altura, peso]);

    function calculaIMC() {
        setIMC("");
        if (peso <= 0 || altura <= 0) {
            alert("Digite apenas números positivos!");
            return;
        }
        const alturaNumber = Number(altura.replace(",", "")) / 100;
        const pesoNumber = Number(peso);
        const aoQuadrado = alturaNumber * alturaNumber;
        setIMC((pesoNumber / aoQuadrado).toFixed(2));
    }

    console.log(imc);

    return (
        <StyledContainerPrincipal>
            <StyledContainerCenter>
                <StyledInfoPrincipal>
                    <h1>Calculadora de IMC</h1>
                    <form action=''>
                        <div>
                            <label htmlFor='altura'>Altura</label>
                            <input
                                onChange={(e) => setAltura(e.target.value)}
                                type='text'
                                name='altura'
                                id='altura'
                                placeholder='Digite sua altura...'
                                value={altura}
                            />
                        </div>
                        <div>
                            <label htmlFor='peso'>Peso</label>
                            <input
                                onChange={(e) => setPeso(e.target.value)}
                                type='text'
                                name='peso'
                                id='peso'
                                placeholder='Digite seu Peso...'
                                value={peso}
                            />
                        </div>
                    </form>
                    <StyledButtons>
                        <button
                            onClick={() => {
                                setAltura("");
                                setPeso("");
                                setIMC("");
                            }}
                        >
                            Limpar
                        </button>
                        <button onClick={calculaIMC} disabled={toggleDisable && "disabled"}>
                            Calcular
                        </button>
                    </StyledButtons>
                    {imc && <span>Seu IMC: {imc}</span>}
                </StyledInfoPrincipal>
                <Grau imc={imc} />
            </StyledContainerCenter>
        </StyledContainerPrincipal>
    );
}

const StyledContainerPrincipal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ecfffa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Vazirmatn", sans-serif;
`;

const StyledContainerCenter = styled.div`
    width: 600px;
    height: 600px;
    background-color: #fff;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.32);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

const StyledInfoPrincipal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-top: 50px;
        font-size: 40px;
        font-weight: 500;
        color: #f43700;
    }

    form {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin-top: 50px;
    }
    form label {
        color: #1da27e;
        font-size: 20px;
        font-weight: 500;
    }
    form input {
        width: 98%;
        margin-top: 5px;
        padding: 10px 0;
        padding-left: 5px;
        border-radius: 5px;
        border: 1px solid #cfcfcf;
    }
    div:nth-child(1),
    div:nth-child(2) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    span {
        background-color: #f43900;
        padding: 20px 30px;
        color: #fff;
        margin-top: 30px;
        font-size: 15px;
        font-weight: 500;
        border-radius: 5px;
    }
`;

const StyledButtons = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
        width: 49%;
        padding: 5px 0;
        background-color: #fff;
        border-radius: 10px;
        border: 2px solid #189f7b;
        font-family: "Vazirmatn", sans-serif;
        font-size: 20px;
        font-weight: 500;
        color: #189f7b;
        cursor: pointer;
    }
    button:hover {
        color: #fff;
        background-color: #189f7b;
    }
`;
