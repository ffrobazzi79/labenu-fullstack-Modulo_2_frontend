import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants/baseURL";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import useForm from "../../hooks/useForm";

function SignUpPage() {
  const navigate = useNavigate();
  
  const {form, onChange, clear} = useForm({
    name: "",
    email: "",
    password:"",

  })
//await
  const singUp = async (form,clear,navigate) => {
    try{
    const res = await axios 
                .post(`${baseURL}/user/signup`,form)
                window.localStorage.setItem("token",res.data.token)
                alert("Usuário cadastrado com sucesso")
                clear();
                goToFeed(navigate)              
    }catch (error){
      alert("Deu ruim pra você, eu não resolver isso. SE VIRA")
    }
  }

  const onSubmitForm = (e) =>{
    e.preventDefault();
    singUp(form,clear,navigate)
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <FormContainer onSubmit={onSubmitForm}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            name={"name"}
            id="name"
            onChange={onChange}
            value={form.name}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            name={"email"}
            id="email"
            onChange={onChange}
            value={form.email}
            required

          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
           name={"password"}
           id="pawssword"
           onChange={onChange}
           value={form.password}
            required
          />
        </InputContainer>
        <button>Cadastrar</button>    
      </FormContainer>

      <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
    </main>
  );
}

export default SignUpPage;