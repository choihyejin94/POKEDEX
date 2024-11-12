import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const AllPokeCard = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid transparent;
  padding: 30px;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const APokeCard = styled.div`
  background-color: #d8d8d8;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonList = ({ pokeData }) => {
  return (
    <AllPokeCard>
      {pokeData.map((pokemon) => (
        <APokeCard key={pokemon.id}>
          <PokemonCard
            img_url={pokemon.img_url}
            korean_name={pokemon.korean_name}
            id={pokemon.id}
            types={pokemon.types}
          />
        </APokeCard>
      ))}
    </AllPokeCard>
  );
};

export default PokemonList;
