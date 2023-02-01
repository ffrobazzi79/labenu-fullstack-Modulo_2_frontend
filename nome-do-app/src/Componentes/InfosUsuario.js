import React from "react";

export function InfosUsuario(props) {

    return (
        <div className="usuario">
            <p>{props.usuario.nome}</p>
            <img src={props.usuario.image}/>
        </div>
    )
}