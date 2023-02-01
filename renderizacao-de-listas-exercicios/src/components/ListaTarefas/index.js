import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  ListaContainerFeita,
  TarefaFeita
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {

  const [lista, setLista] = useState(["ex: Fazer exercícios", "ex: Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("Nova tarefa");
  const [tarefaFeita, setTarefaFeita] = useState([]);



  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const adicionaComEnter = (event) => {
    if (event.key === "Enter") { 
      adicionaTarefa()
    }
  }
  

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    const novaLista = [...tarefaFeita, tarefa];
    setTarefaFeita(novaLista);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={adicionaComEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaContainerFeita>
        <ul>
          {tarefaFeita.map((tarefa, index) => {
            return (
              <TarefaFeita key={index}>
                <p>{tarefa}</p>
              </TarefaFeita>
            );
          })}
        </ul>
      </ListaContainerFeita>
    </ListaTarefasContainer>
  );
}
