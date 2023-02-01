import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";


const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };

  const handleName = (e) => {
    props.setName(e.target.value)
  }

  const handleUrlImg = (e) => {
    props.setUrlImg(e.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.name} onChange={handleName}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.urlImg} onChange={handleUrlImg}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
