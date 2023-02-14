import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId, setBuscaId] = useState("")
  const [buscaNome, setBuscaNome] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header buscaId={buscaId} setBuscaId={setBuscaId} buscaNome={buscaNome} setBuscaNome={setBuscaNome} />
      <CardsContainer>
        {pokemons
        .filter((pokemon)=>{ 
          if (buscaId && pokemon.id === buscaId) {
            return pokemon;
          } else if (!buscaId) {
            return pokemons;
          }
        })

        .filter((pokemon) => {
          // console.log(pokemon.name.english)
          if (pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase())) {
            return pokemon;
          } else if (!buscaId.toLowerCase) {
            return pokemons;
          }
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;


// pokemon.name.english
//                 .toLowerCase()
//                 .includes(buscaNome.toLowerCase())
