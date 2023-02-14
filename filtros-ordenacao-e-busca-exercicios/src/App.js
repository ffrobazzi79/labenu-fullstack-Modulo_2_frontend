import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
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
  const [pesquisa, setPesquisa] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [selecionarTipo, setSelecionarTipo] = useState("");

  const [ordena, setOrdena] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        selecionarTipo={selecionarTipo}
        setSelecionarTipo={setSelecionarTipo}
        ordena={ordena}
        setOrdena={setOrdena}
      />
      <CardsContainer>
        {pokemons.filter((pokemon) => {
          return idFilter ? pokemon.id.includes(idFilter) : pokemon
        })
          .filter((pokemon) => {
            return pokemon.name.english.toLowerCase().includes(pesquisa.toLowerCase());
          })

          .filter((pokemon) => {
            return selecionarTipo ? pokemon.type.includes(selecionarTipo) : pokemons
          })
          .sort((atual, proximo) => {
            // [1,2,3,4]

            if (ordena === "crescente") {
              if (atual.id < proximo.id) {
                return -1
              } else if (atual > proximo) {
                return 1;
              } else {
                return 0;
              }
            }

            if (ordena === "decrescente") {
              if (atual.id > proximo.id) {
                return -1
              } else if (atual < proximo) {
                return 1;
              } else {
                return 0;
              }
            }
            
            if (ordena === "crescente por nome") {
              if (atual.name.english < proximo.name.english) {
                return -1
              } else if (atual > proximo) {
                return 1;
              } else {
                return 0;
              }
            }

            if (ordena === "decrescente por nome") {
              if (atual.name.english > proximo.name.english) {
                return -1
              } else if (atual < proximo) {
                return 1;
              } else {
                return 0;
              }


            }
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
