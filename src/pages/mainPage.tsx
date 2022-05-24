import React from "react";

import Card from "../components/Card";

import * as S from "./styles";

import ImagemLegal from "../assets/imagem.jpg";

const Page = () => {
  return (
    <>
      <S.Body>
        <Card big={true} text="Texto da propriedade" />
        <Card big={false} text="oi Neto">
          <p>isso é o filho</p>
        </Card>
        <S.MinhaImagem src={ImagemLegal} />
      </S.Body>
    </>
  );
};

export default Page;
