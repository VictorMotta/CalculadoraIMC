import { useState, useEffect } from "react";
import styled from "styled-components";

export default function TableCell({ item, imcDeclared }) {
    const { imcMin, imcMax, descricao, classificacao, grau } = item;
    const [color, setColor] = useState("#fff");

    // verificar se o imc é maior que o mínimo
    console.log(imcDeclared);

    useEffect(() => {
        setColor("#fff");
        if (imcDeclared <= imcMax && imcDeclared >= imcMin) {
            setColor("#cdeae3");
        }
    }, [imcDeclared]);

    return (
        <StyledTbody background={!imcDeclared ? "#fff" : color}>
            <tr>
                <td>{descricao}</td>
                <td>{classificacao}</td>
                <td>{grau}</td>
            </tr>
        </StyledTbody>
    );
}

const StyledTbody = styled.tbody`
    td {
        background-color: ${(props) => props.background};
        border: 1px solid #eee;
        text-align: center;
        padding: 10px 0;
        font-size: 13px;
        font-weight: 500;
    }
`;
