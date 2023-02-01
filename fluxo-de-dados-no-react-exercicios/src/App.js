import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`

const ContainerDiv = styled.div`
  display: flex;
`


function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [name, setName] = useState("");
  const [urlImg, setUrlImg] = useState("");

  const [titulo, setTitulo] = useState(""); 
  const [urlImgPost, setUrlImgPost] = useState(""); 
  const [descricao, setDescricao] = useState(""); 


  
  const [state, setState] = useState({ state1: "", state2: "", state3: "" })

  const HandleClick = () => {
    setState (() => ({
      state1: titulo,
      state2: urlImgPost,
      state3: descricao
    })) 
  }



  return (
    <>
      <GlobalStyle />
      <Container>
        <ContainerDiv>
        <aside>
          
          {pageFlow === 1 ? (
            <>
            <Header/>
            <FormularioLogin setPageFlow={setPageFlow} name={name} setName={setName} urlImg={urlImg} setUrlImg={setUrlImg}/>
            </>          
          ) : ( 
          <>
          <Header name={name} urlImg={urlImg}/>
          
          <FormularioPostagem titulo={titulo} setTitulo={setTitulo} urlImgPost={urlImgPost} setUrlImgPost={setUrlImgPost} descricao={descricao} setDescricao={setDescricao}/>
          <button onClick={HandleClick}>aqui</button>
          </>
          )}

      

          {/* {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} name={name} setName={setName} urlImg={urlImg} setUrlImg={setUrlImg}/>
          ) : (
            <FormularioPostagem titulo={titulo} setTitulo={setTitulo} urlImgPost={urlImgPost} setUrlImgPost={setUrlImgPost} descricao={descricao} setDescricao={setDescricao}/>
          )} */}
        
        </aside>
        <TelaDaPostagem state={state} setState={setState} titulo={titulo} urlImgPost={urlImgPost} descricao={descricao}/>
        </ContainerDiv>
      </Container>
    </>
  );
}

export default App;
