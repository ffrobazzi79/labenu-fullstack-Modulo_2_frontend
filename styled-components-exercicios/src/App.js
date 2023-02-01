import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Componentes/Hearder/Header";
import { Section } from "./Componentes/Main/Section/Section";
import {Nav} from "./Componentes/Main/Nav/Nav"

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  const card2 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=2",
    textoAlternativo: "descrição da imagem"
  };

  const card3 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=3",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <GlobalStyle />
      <div className="tela-inteira">
        <Header />
          
        <main>
          <Nav/>
          <Section card={card1}/>
          <Section card={card2}/>
          <Section card={card3}/>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
