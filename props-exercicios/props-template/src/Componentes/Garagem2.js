import React from "react";
import Carro from "./Carro";

function Garagem2(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={() => props.apresentaGaragem(props.nome)}>apresentar a garagem</button>
      <Carro carro={props.carro1} />
      <Carro carro={props.carro2} />
      <Carro carro={props.carro3} />
      <Carro carro={props.carro4} />
    </div>
  );
}

export default Garagem2;