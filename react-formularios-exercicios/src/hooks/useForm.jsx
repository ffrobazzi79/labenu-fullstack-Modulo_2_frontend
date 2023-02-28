import { useState } from "react";


export function useForm (initialState) {

    const [form, setForm] = useState(initialState)

    const onChangeForm = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value })
    } 
    return {form, onChangeForm}
}