import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";


const TelaDaPostagem = ({state}) => {
  

  return (
    <ContainerPostagem>
      <TitleHeader>{state.state1}</TitleHeader>
      <Image src={state.state2} />
      <Description>{state.state3}</Description>

    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
