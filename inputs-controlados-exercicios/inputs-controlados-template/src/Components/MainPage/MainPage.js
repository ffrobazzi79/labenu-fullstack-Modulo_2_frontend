import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("Fernando");
  const [idade, setIdade] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const mudarNome = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    console.log(nome)
    setNome(event.target.value)
  }
  console.log(nome);

  const mudarIdade = (e) => {
    setIdade(e.target.value)
  }

  const mudarEmail = (e) => {
    setEmail(e.target.value)
  }

  const mudarSenha = (e) => {
    setSenha(e.target.value)
  }

  const enviarDados = () => {
    const dados = {
      nome: nome,
      idade: idade
    }

    console.log(dados)

    setNome("")
    setIdade("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={mudarNome}/>
        </label>
        <label>
          Idade:
        </label>
          <Input value={idade} onChange={mudarIdade} type="number" />
        
          <label>
          email:
        </label>
          <Input value={email} onChange={mudarEmail} type="email" />
          <label>
          Senha:
        </label>
          <Input value={senha} onChange={mudarSenha} type="password" />


      <button onClick={enviarDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
