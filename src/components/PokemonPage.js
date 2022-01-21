import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
      .then((r)=>r.json())
      .then((data)=>{
        setPokemon(data)
      })
  }, [])

  const filteredPokemon = pokemonArray.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  function handleAddPokemon(newPokemon){
    const newPokemonArray = [...pokemonArray, newPokemon]
    setPokemon(newPokemonArray);
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={handleAddPokemon}/>
      <br />
      <Search setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;


