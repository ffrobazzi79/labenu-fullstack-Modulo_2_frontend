import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirm, setConfirm] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeConfirm = (event) => {
  setConfirm(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const sendData = () => {
  if (
    age >= 18 &&
    name.length <= 30 &&
    name.length >= 10 &&
    email === confirm &&
    age != "" &&
    email != "" &&
    confirm != "" &&
    name != ""

    ) {
    setFormFlow(2)
  } else {
    alert("Formulário incorreto")
  }
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm name={name} age={age} email={email} formFlow={formFlow}
      onChangeName={onChangeName} onChangeAge={onChangeAge} onChangeEmail={onChangeEmail} sendData={sendData} confirm={confirm} onChangeConfirm={onChangeConfirm} /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage