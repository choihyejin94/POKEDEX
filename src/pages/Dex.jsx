import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import Footer from "../components/Footer";
import { PokeProvider } from "../context/PokeContext";
import MOCK_DATA from "../data/mockData";

const AllBackground = styled.div`
  font-family: "Bebas-Neue";
  font-weight: 500;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const DivForGap = styled.div`
  margin: 5px 0;
  background-color: #ffffc0;
  width: 100%;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Dex = () => {
  return (
    <PokeProvider>
      <AllBackground>
        <DivForGap>
          <Dashboard />
        </DivForGap>
        <DivForGap>
          <PokemonList pokeData={MOCK_DATA} />
        </DivForGap>
        <Footer />
      </AllBackground>
    </PokeProvider>
  );
};

export default Dex;
