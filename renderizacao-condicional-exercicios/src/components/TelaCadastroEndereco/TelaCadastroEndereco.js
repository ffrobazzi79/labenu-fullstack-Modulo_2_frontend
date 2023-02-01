




export function TelaCadastroEndereco(props) {

  return (
    <div >
      <h1>LOGIN</h1>
      <form>
        <label>Endereço:
          <input />
        </label>
        <label>Número:
          <input />
        </label>
        <label>Complemento:
          <input />
        </label>
        <label>Telefone:
          <input />
        </label>
        {/* <button onClick={}>Entrar</button> */}
        <button onClick={() => props.mudarTela(4)}>Cadastre-se</button>
      </form>
    </div>
  );
}