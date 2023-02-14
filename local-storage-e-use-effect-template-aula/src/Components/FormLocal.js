import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);
    // const [novaLista, setNovalista] = useState([])
    const [contador, setContador] = useState(0)


    const armazenaNome = () => {
        localStorage.setItem("guardouNome", nome)
    }

    function recebeNome () {
        const nomeRecebido = localStorage.getItem("guardouNome")
        alert(nomeRecebido)
    }

    // const armazenaTarefa = () => {
    //     localStorage.setItem("guardouTarefa", tarefa)
    // }

    function recebeTarefa () {
        const tarefaRecebida = localStorage.getItem("lista")
        alert(tarefaRecebida)
    }

    function armazenaTarefas () {
        const novaLista = [...listaTarefa, tarefa]
        const listaString = JSON.stringify(novaLista)
        localStorage.setItem("lista", listaString)
    }

    function atualizaLista () {
        const novaLista = [...listaTarefa, tarefa];
        // setListaTarefa(novaLista)
        const listaString = JSON.stringify(novaLista)
        localStorage.setItem("lista", listaString)
        setNovalista(novaLista)
    }

    const acessarLista = () => {
        const listaLocalStorage = localStorage.getItem("lista");
        console.log(typeof listaLocalStorage)
        const listaArray = JSON.parse(listaLocalStorage)
        console.log(typeof listaArray)
        // tem que verificar se é verdadeiro
        if (listaArray) {
            setListaTarefa(listaArray)
        }
    }

    useEffect(()=>{acessarLista()},[novaLista])

    const adicionarContador = () => {
        setContador(contador + 1)
        console.log(contador)
    }
    console.log(contador)

    const diminuirContador = () => {
        setContador(contador - 1)
        console.log(contador)
    }
    // console.log(contador)
    // useEffect(()=>{
    //     const contadorTela = JSON.parse(localStorage.getItem("contador"))
    //     setContador(contadorTela)
    // },[])
    // useEffect(()=>{
    //     localStorage.setItem("contador", contador)
    // },[contador])

    useEffect(() => {
        const contadorTela = JSON.parse(localStorage.getItem("contador")) //localStorage.getItem("contador")
        // const contadorNumber = JSON.parse(contadorTela)
        setContador(contadorTela) //contadorNumber
    },[]);
    
    useEffect(()=> {
        localStorage.setItem("contador", contador)
    },[contador]);



    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input name="nome" id="nome" value={nome} onChange={(event) => {setNome(event.target.value);}}/>
            </label>
            <div>
                <button onClick={armazenaNome}>Guardar Dados</button>
                <button onClick={recebeNome}>Acessar Dados</button>
            </div>
            <br />
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input name="tarefa" id="tarefa" value={tarefa} onChange={(e) => {setTarefa(e.target.value);}}/>
            </label>
            <button type="button" onClick={atualizaLista}>adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
            <div>
                <button onClick={armazenaTarefas}>Guardar tarefa</button>
                <button onClick={recebeTarefa}>Acessar tarefa</button>
            </div>
            <button onClick={diminuirContador}>-</button>
            {contador}
            <button onClick={adicionarContador}>+</button>


        </Form>
    );
}



// useEffect(() => {
//     const contadorTela = JSON.parse(localStorage.getItem("contador")) //localStorage.getItem("contador")
//     // const contadorNumber = JSON.parse(contadorTela)
//     setContador(contadorTela) //contadorNumber
// },[]);

// useEffect(()=> {
//     localStorage.setItem("contador", contador)
// },[contador]);