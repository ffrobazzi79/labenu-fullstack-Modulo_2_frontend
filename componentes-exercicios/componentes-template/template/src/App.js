import React from "react";
import "./App.css";
import {Garagem} from "./Componentes/Garagem.js"
import {Header} from "./Componentes/Header"
import {Footer} from "./Componentes/Footer"



export default function App() {
  

  return (
    <div className="App">
     <Header />
     <Garagem />
     <Garagem />
     <Footer />
    </div>
  );
}
