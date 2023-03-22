import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import theme1 from "./theme"


export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };
  console.log(users)

  return (
    <ChakraProvider resetCSS theme={theme}>

      <Flex gap={"16px"} wrap="wrap">

        {users.map(user => {
          return (
            <Card key={user.id} user={user}/>
          )
        })}

      </Flex>

    </ChakraProvider>
  );
}
