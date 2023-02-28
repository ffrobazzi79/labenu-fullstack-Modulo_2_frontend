import { useState } from "react";

export function useForm (estadoInicial) {
    const [form, setForm] = useState({ nome: "", idade: "", email: "", profissao: "" });
    console.log(form["idade"]); //notação de colchete para acessar objetos
  
    const onChangeForm = (e) => {
      const { name, value } = e.target;
      console.log("name:", name, "value:", value);
      setForm({ ...form, [name]: value });
    };

    return {form, onChangeForm}
}