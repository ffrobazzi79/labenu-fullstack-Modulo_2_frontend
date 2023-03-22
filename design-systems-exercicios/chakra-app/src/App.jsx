import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import Card from './card/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const arrayCard = [
    {
      brand: "",
      name: "",
      priceDescount: ""
  }
  ]

  return (

      <ChakraProvider>
        <Card/>

      </ChakraProvider>


  )
}

export default App
