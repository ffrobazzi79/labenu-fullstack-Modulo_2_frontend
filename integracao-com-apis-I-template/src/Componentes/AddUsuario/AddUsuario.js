import axios from "axios";
import React, { useState } from "react";

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const headers = {
    headers: {
      Authorization: "fernando-robazzi-conway"
    }
  };
  const adicionarUsuario = () => {
    const novoUsuario = {
      name: nome,
      email: email
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        novoUsuario,
        headers
      )
      .then(() => {
        props.recebeUsuarios();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };
  return (
    <>
      <p>Adicionar novo usuario</p>
      <input
        placeholder={"nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={adicionarUsuario}>Enviar</button>
    </>
  );
}

export default AddUsuario;
