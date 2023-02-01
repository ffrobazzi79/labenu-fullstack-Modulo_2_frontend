import "./FormularioOver.css";

const FormularioOver = ({ retryForm }) => {
  return (
    <div>
      <h1>Chegou até aqui</h1>
      <button onClick={retryForm}>Voltar</button>
    </div>
  );
};

export default FormularioOver;
