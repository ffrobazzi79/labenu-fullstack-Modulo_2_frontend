//Components
import { useState } from "react";
import FormularioOne from "./componentes/FormularioOne/FormularioOne";
import FormularioTwo from "./componentes/FormularioTwo/FormularioTwo";
import FormularioOver from "./componentes/FormularioOver/FormularioOver";

//* Estados do formulário

const stages = [
  { id: 1, name: "formOne" }, // 1- Componente
  { id: 2, name: "formTwo" }, // 2- Componente
  { id: 3, name: "formOver" }, // 3- Componente
];

function App() {
  //Iniciando no estado primario da pagina
  const [formStage, setFormStage] = useState(stages[0].name);

  // Função controladora do event StartFormulario
  const startFormulario = () => {
    setFormStage(stages[1].name);
  };

  // Função controladora formularioTwo
  const startFormularioTwo = () => {
    setFormStage(stages[2].name);
  };
  // Função controladora formularioOver
  const retryForm = () => {
    setFormStage(stages[0].name);
  };

  // Return das funções
  return (
    <div className="App">
      {/*Gerando o controle de estados do meus formularios*/}
      {formStage === "formOne" && (
        <FormularioOne startFormulario={startFormulario} />
      )}

      {formStage === "formTwo" && (
        <FormularioTwo startFormularioTwo={startFormularioTwo} />
      )}

      {formStage === "formOver" && <FormularioOver retryForm={retryForm} />}
    </div>
  );
}

export default App;
