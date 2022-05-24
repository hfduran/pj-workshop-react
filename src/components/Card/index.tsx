import React, {ReactElement} from "react";

import * as S from "./styles";

interface CardProps {
  text: string;
  big: boolean;
  children?: ReactElement;
}

const Card: React.FC<CardProps> = ({ text, big, children }) => {
  return (
    <S.CardContainer bigStyle={big}>
      <S.CardText>{text}</S.CardText>
      {children}
    </S.CardContainer>
  );
};

export default Card;
