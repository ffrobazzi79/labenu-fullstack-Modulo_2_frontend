import React, { useState, useEffect } from "react";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
// import { useCapturarNome } from "./hooks/UseCapturarNome";
// import { useCapturarPostagens } from "./hooks/useCapturarPostagens";
import { useRequestData } from "./hooks/useRequestData";

function App() {

  const [nomeUsuarios, isLoadingUsuarios, errorUsuarios] = useRequestData("users")

  const [postagens, isLoadingPostagens, errorPostagens] = useRequestData("comments")



  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
      { errorPostagens ? (
          <p>Erro, tente novamente</p>) : (
    
       !isLoadingUsuarios ? (
        nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        }) ) : (<p>carregando...</p>))}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      { errorPostagens ? (
          <p>Erro, tente novamente</p>) : (
       !isLoadingPostagens ? (
      postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
        }) ) : (<p>carregando...</p>))}
      </PostContainer>
    </div>
  );
}

export default App;



