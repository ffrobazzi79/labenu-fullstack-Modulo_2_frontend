import React from "react";
import Garagem from "./Componentes/Garagem";
import Garagem2 from "./Componentes/Garagem2";
import "./styles.css";

export default function App() {
  
  const nome = "Conway";
  const nome2 = "Fernando"

  const apresentaGaragem = (nomeNaGaragem) => {
    alert(`boas vindas à garagem de ${nomeNaGaragem}`);
  };

  const carro1 = {
    nome: "Gol",
    cor: "branco",
    ano: 2015,
    flex: true
  };
  const carro2 = {
    nome: "Fusca",
    cor: "Amarelo",
    ano: 1989,
    flex: false
  };

  const carro3 = {
    nome: "Ferrari",
    cor: "Amarelo",
    ano: 2023,
    flex: false
  };

  const carro4 = {
    nome: "Ford GT",
    cor: "Azul",
    ano: 2017,
    flex: false
  };

  const carro5 = {
    nome: "Ford GT",
    cor: "Azul",
    ano: 2017,
    flex: false
  };
  const carro6 = {
    nome: "Ford GT",
    cor: "Verde",
    ano: 2023,
    flex: false
  };
  const carro7 = {
    nome: "Ford GT",
    cor: "Amarelo",
    ano: 2020,
    flex: false
  };
  const carro8 = {
    nome: "Ford GT",
    cor: "Preto",
    ano: 2018,
    flex: false
  };

  return (
    <div className="App">
      <Garagem nome={nome} 
      apresentaGaragem={apresentaGaragem}
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}
      />
      <Garagem2 nome={nome2} 
      apresentaGaragem={apresentaGaragem}
      carro1={carro5}
      carro2={carro6}
      carro3={carro7}
      carro4={carro8}
      />
    </div>
  );
}
