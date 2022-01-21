import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Pokemon Collection</h1>
      {pokemon.map((p)=>
        <PokemonCard
          key={p.id}
          id={p.id}
          name={p.name}
          hp={p.hp}
          sprites={p.sprites}
        />
      )}
    </Card.Group>
  );
}

export default PokemonCollection;



