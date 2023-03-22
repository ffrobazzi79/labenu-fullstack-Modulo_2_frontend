import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import useForm from "../../hooks/useForm.js";
import axios from "axios";
import { baseURL } from "../../constants/baseURL.js";

// Exercício 1
// Na página LoginPage utilize o endpoint Login para implementar a função de logar na aplicação.
// Salve o token no Local Storage. Assim que um usuário logar na aplicação, ele deve ser redirecionado para a página de Feed.

function LoginPage() {
  const navigate = useNavigate();

 const {form, onChange, clear} = useForm({email: "",password:""})

  
  const login = (form,clear,navigate) =>{
    const body ={
      email: form.email,
      password: form.password
    }
    axios
          .post(`${baseURL}/user/login`, body)
          .then((res)=>{
            window.localStorage.setItem("token",res.data.token)
            console.log(res.data.token)
            clear();
            goToFeed(navigate)
          })
          .catch((err)=>{
            console.log(err)
            alert("Erro no login, peça a Deus que se resolva logo")
          })
         }


  const onSubmitForm = (e) =>{
    e.preventDefault();
    login(form,clear,navigate)
  }


  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={onSubmitForm}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            name={"email"}
            value ={form.email}
            id="email"
            required
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            name={"password"}
            id="password"
            value={form.password}
            required
            onChange={onChange}
          />
        </InputContainer>
        <button type="submit">Entrar</button>
        <button type="button" onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
      
    </main>
  );
}

export default LoginPage;
