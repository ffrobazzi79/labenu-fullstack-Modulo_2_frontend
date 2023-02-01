import "./FormularioTwo.css";

const FormularioTwo = ({ startFormularioTwo }) => {
  return (
    <div>
      <form className="formularioOne">
        <div>
          <h2>Formulário de inscrição</h2>

          <label>
            <span>Data de Nascimento:</span>
            <input
              type="date"
              placeholder="Digite sua data de nascimento"
              required
            />
          </label>
          <label>
            <span>Telefone:</span>
            <input type="number" placeholder="Telefone" required />
          </label>
          <label>
            <span>Como você se declara:</span>
            <select name="cor" id="cor">
              <option value="Negro">Negro</option>
              <option value="Branco">Branco</option>
              <option value="Amarelo">Amarelo</option>
              <option value="Indígena">Indígena</option>
              <option value="PrefiroNãoDizer">Prefiro não dizer</option>
            </select>
          </label>

          <button onClick={startFormularioTwo}>Enviar Dados</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioTwo;
