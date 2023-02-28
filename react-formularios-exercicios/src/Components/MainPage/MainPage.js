import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from '../../hooks/useForm'

function MainPage() {

  const {form, onChangeForm} = useForm({NomeCurso: "", NumeroModulos: "", TecnologiasAbordadas: "", Responsavel: ""})

    const hadleClick = (e) => {
      e.preventDefault()
      console.log(form)
    }

 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={hadleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="NomeCurso"
          value={form.NomeCurso}
          onChange={onChangeForm}
          type="text"
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="NumeroModulos"
          value={form.NumeroModulos}
          onChange={onChangeForm}
          // type="number"
          // min={2}
          pattern='^(0*[2-9]|[1-9][0-9]+)$'
          title="pelo menos 2 módulos"
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="TecnologiasAbordadas"
          value={form.TecnologiasAbordadas}
          onChange={onChangeForm}
          type="text"
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="Responsavel"
          value={form.Responsavel}
          onChange={onChangeForm}
          type="text"
          pattern='^.[^0-9][^!@#$%&]{5,}$'
          title="minimo de 5 letras"
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
