/*
  No caso de vocês, esse arquivo servirá apenas para importar a página que
  vocês criarão na pasta pages e os estilos globais.
*/

import "./App.css";

import Page from "./pages/mainPage";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Page />
    </>
  );
}

export default App;
