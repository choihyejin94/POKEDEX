import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/pokemon-logo.png";

const HomeBox = styled.div`
  background-color: #ffa8a8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StartPokemon = styled.button`
  font-family: "Bebas-Neue";
  font-weight: 800;
  background-color: #ff3636;
  color: white;
  font-size: large;
  border: 1px solid red;
  border-radius: 5px;
  height: 50px;
  width: 200px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeBox>
      <img src={logo} alt="pokemon logo" height="300px" />
      <StartPokemon onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartPokemon>
    </HomeBox>
  );
};

export default Home;
