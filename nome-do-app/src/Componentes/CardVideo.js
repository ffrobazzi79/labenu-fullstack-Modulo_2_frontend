import React from "react";
import {InfosUsuario} from "./InfosUsuario"

export function CardVideo(props) {
    const titulo = "Título do vídeo";
    console.log(props.video)
    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
    }

    return (
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.video.image} alt="" />
        <h4>{props.video.titulo}</h4>
        <InfosUsuario usuario={props.usuario}/>
      </div>
    )
}