/*
Codar uma página é a mesma coisa que codar um componente, tem o index.tsx e o styles.ts
*/

import React from "react";

import Card from "../components/Card";

import * as S from "./styles";

import ImagemLegal from "../assets/imagem.jpg";

const Page = () => {
  return (
    <S.Body>
      <S.MainTitle>Workshop de React!</S.MainTitle>
      <Card big={true} text="Fiz o feed" />
      <Card big={false} text="oi Neto" cardColor="#9affe6">
        {/* children do componente */}
        <S.CardText>isso é o filho</S.CardText>
      </Card>
      <Card big={false} cardColor="#fc9ffc" text="carne moída"></Card>
      <S.MinhaImagem src={ImagemLegal} />
    </S.Body>
  );
};

export default Page;
