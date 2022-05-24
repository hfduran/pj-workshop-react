import styled from "styled-components";

interface BigProps {
  cardColor?: string;
  bigStyle: boolean;
}

export const CardContainer = styled.div<BigProps>`
  width: ${(props) => (props.bigStyle ? "500px" : "150px")};
  height: 150px;
  border-radius: 12px;
  border: 1px solid black;

  // verifica se a cardColor não é undefined. Se for, a cor fica branco mesmo, caso contrario, usa a cor dada.
  background-color: ${(props) => (props.cardColor ? props.cardColor : "white")};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardText = styled.p`
  color: black;
  font-size: 20px;
`;
