// Import do Css
import "./FormularioOne.css";
//Import de components
import React from "react";
import { useState } from "react";

const FormularioOne = ({ startFormulario }) => {
  // Valores de entrada do usuario ao digitar
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  // Valores de erro do usuario ao digitar
  const [ageError, setAgeError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");

  // Função para validação da idade
  function ValidadeAge() {
    if (age < 18) {
      setAgeError("Você precisa ser maior de idade para se inscrever");
      return false;
    }
    setAgeError("");
    return true;
  }

  // Função para validar o nome
  function validaNome() {
    if (name.length < 10 || name.length > 30) {
      setNameError("O nome precisa ter entre 10 e 30 caracteres");
      return false;
    }
    setNameError("");
    return true;
  }

  // Função para validar o email
  function validaEmail() {
    let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailFormat.test(email)) {
      setEmailError("Email inválido");
      return false;
    }
    setEmailError("");
    return true;
  }

  // Função para validar se os dois campos de email são iguais
  function validaEmailIguais() {
    if (email !== confirmEmail) {
      setConfirmEmailError("Os emails não correspondem");
      return false;
    }
    setConfirmEmailError("");
    return true;
  }

  // Função para validar se todos os campos obrigatórios foram preenchidos
  function validaCamposInputs() {
    if (!age || !name || !email || !confirmEmail) {
      alert("Todos os campos são obrigatórios");
      return false;
    }
    return true;
  }
  // Call back pro meu startFormulario

  function handleSubmit(event) {
    event.preventDefault();
    // Armazendo minhas funções para fazer a chamada
    const isValid =
      ValidadeAge() &&
      validaNome() &&
      validaEmail() &&
      validaEmailIguais() &&
      validaCamposInputs();
    if (isValid) {
      startFormulario();
    }
  }

  return (
    <div>
      <h2>Formulário de inscrição</h2>

      <form className="formularioOne" onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/*Caso usuario digite o nome que não esta conforme minha função*/}
          {nameError && <div className="errorTarget">{nameError}</div>}
        </label>
        <label>
          <span>Idade:</span>
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {/*Caso usuario digite a idade que não esta conforme minha função*/}
          {ageError && <div className="errorTarget">{ageError}</div>}
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/*Caso usuario digite o email que não esta conforme minha função*/}
          {emailError && <div className="errorTarget">{emailError}</div>}
        </label>
        <label>
          <span>Confirmação de E-mail</span>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          {/*Caso usuario digite email que não esta conforme minha função*/}
          {confirmEmailError && (
            <div className="errorTarget">{confirmEmailError}</div>
          )}
        </label>
        <button type="submit">Enviar Dados</button>
      </form>
    </div>
  );
};

export default FormularioOne;
