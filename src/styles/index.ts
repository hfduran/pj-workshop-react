/*
  Este arquivo é para fazer os estilos globais. Acabei não comentando sobre ele no workshop.
  Deve-se importá-lo no App.tsx e colocá-lo lá.
*/

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;
    }
`;
