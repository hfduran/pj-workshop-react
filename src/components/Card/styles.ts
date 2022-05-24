import styled from "styled-components";

interface BigProps {
    bigStyle: boolean;
}

export const CardContainer = styled.div<BigProps>`
    width: ${(props) => props.bigStyle ? '500px' : '150px'};
    height: 150px;
    border-radius: 12px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardText = styled.p`
    color: black;
    font-size: 20px;
`;