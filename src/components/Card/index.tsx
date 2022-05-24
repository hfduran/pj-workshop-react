import React, { ReactElement } from "react";

import * as S from "./styles";

interface CardProps {
  text: string;
  big: boolean;
  
  // esta prop nao esta no video do WS, coloquei agora porque achei pertinente
  cardColor?: string;

  children?: ReactElement;
}

const Card: React.FC<CardProps> = ({ text, big, cardColor, children }) => {
  return (
    <S.CardContainer bigStyle={big} cardColor={cardColor}>
      <S.CardText>{text}</S.CardText>
      {children}
    </S.CardContainer>
  );
};

export default Card;
