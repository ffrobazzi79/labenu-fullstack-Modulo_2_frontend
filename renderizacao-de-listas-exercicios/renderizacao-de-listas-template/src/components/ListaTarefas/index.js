import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "Aula na Conway",
    "estudar React",
    "estudar React",
    "Fazer almoço",
    "colocar key nos componentes"
  ]);


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const renderizaTela = () => {
    
    return lista.map((item, indice)=>{
      console.log(indice)
      return (
      <Tarefa key={indice}>
       
        <p>{item}</p>
        <RemoveButton onClick={() => removeTarefa2(item)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
      ) 
     })
  }

  const adicionaTarefa = () => {
    // const novoArray = [...lista];
    // novoArray.push(novaTarefa);
    // setLista(novoArray);

    setLista([...lista, novaTarefa])
    setNovaTarefa("")
  };

  // const removeTarefa = (item) => {
  //   const listaFiltrada = lista.filter((elemento) => elemento !== item)
  //   setLista(listaFiltrada)
  //   // setLista([lista.filter((elemento) => {elemento !== item})])
  //   setNovaTarefa("")
  // };

  const removeTarefa2 = (task) => {
    
      const novaLista = lista.filter((tarefa) => {
        return tarefa !== task;
      })
      setLista(novaLista)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderizaTela()}
         
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
