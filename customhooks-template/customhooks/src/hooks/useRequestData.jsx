import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export function useRequestData(path) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    // quando está carregando isLoading === true
    // não está carregando isLoading === false

    useEffect(() => {
        // a requisição começou aqui, logo isLoading -> true

        setIsLoading(true)
        axios
            .get(`${BASE_URL}${path}`)
            .then((response) => {
                setData(response.data);
                setTimeout(
                    function () {
                        setIsLoading(false)
                    }, 5000
                )

            })
            .catch((error) => {
                console.log(error);
                setError(true)

            });
    }, [path]);
    return [data, isLoading, error]
}