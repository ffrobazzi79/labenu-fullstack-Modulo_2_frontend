import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Image src={props.imagem} alt={props.descricao}/>
            <Description>Descrição: {props.descricao}</Description>
            <Titulo>Título: {props.titulo}</Titulo>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem