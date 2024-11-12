import React, { createContext, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [myPokes, setMyPokes] = useState([]);

  const IncludePokemon = (pokemon) => {
    const includePoke = myPokes.some((pk) => pk.id === pokemon.id);
    if (myPokes.length < 6 && !includePoke) {
      setMyPokes([...myPokes, pokemon]);
    } else if (includePoke) {
      alert("이미 포함되어 있는 포켓몬입니다.");
    } else {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
    }
  };

  const removePokemon = (pokemon) => {
    setMyPokes(myPokes.filter((myPoke) => myPoke.id !== pokemon.id));
  };

  return (
    <PokeContext.Provider
      value={{ myPokes, setMyPokes, IncludePokemon, removePokemon }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContext;
