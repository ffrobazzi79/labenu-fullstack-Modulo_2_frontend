import axios from "axios";
import React, { useEffect, useState } from "react";

function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  const headers = {
    headers: {
      Authorization: "fernando-robazzi-conway"
    }
  };

  const recebeUsuarioPorId = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        headers
      )
      .then((resposta) => {
        setUsuario(resposta.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const atualizarUsuario = () => {
    const usuarioAtualizado = {
      name: nome,
      email: email
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
        usuarioAtualizado,
        headers
      )
      .then(() => {
        recebeUsuarioPorId(usuario.id);
        setEditar(false);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const excluirUsuario = () => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
        headers
      )
      .then(() => {
        props.recebeUsuarios();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  useEffect(() => {
    recebeUsuarioPorId(usuario.id);
  }, []);

  return (
    <>
      {editar ? (
        <div>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={atualizarUsuario}>Enviar alterações</button>
        </div>
      ) : (
        <>
          <p>Nome:{usuario.name}</p>
          <p>E-mail:{usuario.email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={excluirUsuario}>Excluir</button>
    </>
  );
}

export default Usuario;
