import styled from "styled-components";
import TableCell from "./TableCell";
import { tableInfo } from "../constants/tableInfo";

export default function Grau({ imc }) {
    return (
        <StyledContainerGrau>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Grau</th>
                    </tr>
                </thead>
                {tableInfo.map((item) => (
                    <TableCell item={item} imcDeclared={imc} />
                ))}
            </table>
        </StyledContainerGrau>
    );
}

const StyledContainerGrau = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    thead {
        background-color: #28a684;
    }
    th:nth-child(1) {
        vertical-align: middle;
        padding: 10px 100px;
        color: #fff;
        font-weight: 300;
        font-size: 20px;
        text-align: center;
    }
    th:nth-child(2) {
        vertical-align: middle;
        padding: 10px 50px;
        color: #fff;
        font-weight: 300;
        font-size: 20px;
        text-align: center;
    }
    th:nth-child(3) {
        vertical-align: middle;
        padding: 10px 20px;
        color: #fff;
        font-weight: 300;
        font-size: 20px;
        text-align: center;
    }
`;
