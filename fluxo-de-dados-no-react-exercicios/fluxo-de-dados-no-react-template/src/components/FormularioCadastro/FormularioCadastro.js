// import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {
  

  const handleInput = (e) =>{
    console.log(e.target.value)
    props.setImagem(e.target.value)
  };

  const handleInput2 = (e) =>{
    console.log(e.target.value)
    props.setDescricao(e.target.value)
  };

  const handleInput3 = (e) =>{
    console.log(e.target.value)
    props.setTitulo(e.target.value)
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={handleInput}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={handleInput2}/>
        </StyledLabel>

        <StyledLabel>
          Título:
          <Input id="titulo" value={props.titulo} onChange={handleInput3}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro