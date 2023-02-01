import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const handleTitulo = (e) => {
    props.setTitulo(e.target.value)    
  }
  const handleUrlImgPost = (e) => {
    props.setUrlImgPost(e.target.value)
  }
  const handleDescricao = (e) => {
    props.setDescricao(e.target.value)
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo: 
          <Input id="titulo" value={props.titulo} onChange={handleTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto" src={props.urlImgPost} onChange={handleUrlImgPost}>
          Imagem: 
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao" value={props.descricao} onChange={handleDescricao}>
          Descrição: {props.descricao}
          <Input id="descricao" />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
