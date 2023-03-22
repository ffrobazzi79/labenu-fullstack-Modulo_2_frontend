import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"

const useProtectedPage = () =>{

const navigate = useNavigate()
const token = window.localStorage.getItem("token")
useEffect(()=>{

    if (!token){
        alert("Faça o login ou se cadastra")
        goToLogin(navigate)
    }
},[token,navigate])
}
export default useProtectedPage;