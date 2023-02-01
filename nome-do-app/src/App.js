import React from "react";
import "./styles.css";
import {CardVideo} from "./Componentes/CardVideo"
import {infoUsuario} from "./Componentes/InfosUsuario"

export default function App() {

  const video1 = {
    image: "https://picsum.photos/400/400?a=1",
    titulo: "Título 1"
  }

  const video2 = {
    image: "https://picsum.photos/400/400?a=2",
    titulo: "Título 2"
  }

  const video3 = {
    image: "https://picsum.photos/400/400?a=3",
    titulo: "Título 3"
  }

  const video4 = {
    image: "https://picsum.photos/400/400?a=4",
    titulo: "Título 4"
  }

  const video5 = {
    image: "https://picsum.photos/400/400?a=5",
    titulo: "Título 5"
  }

  const video6 = {
    image: "https://picsum.photos/400/400?a=6",
    titulo: "Título 6"
  }

  const video7 = {
    image: "https://picsum.photos/400/400?a=7",
    titulo: "Título 7"
  }

  const video8 = {
    image: "https://picsum.photos/400/400?a=8",
    titulo: "Título 8"
  }

  const usuario1 = {
    nome: "John",
    image: ""
  }

  const usuario2 = {
    nome: "Bill",
    image: ""
  }
  
  const usuario3 = {
    nome: "Don",
    image: ""
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <section className="painel-de-videos">
            <CardVideo video={video1} usuario={usuario3}/>
            <CardVideo video={video2} usuario={usuario2}/>
            <CardVideo video={video3} usuario={usuario1}/>
            <CardVideo video={video4} usuario={usuario1}/>
            <CardVideo video={video5} usuario={usuario3}/>
            <CardVideo video={video6} usuario={usuario2}/>
            <CardVideo video={video7} usuario={usuario1}/>
            <CardVideo video={video8} usuario={usuario1}/>
            </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
