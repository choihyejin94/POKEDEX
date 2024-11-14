import React, { useContext } from "react";
import styled from "styled-components";
import PokeContext from "../context/PokeContext";

const OneCardStyle = styled.div`
  background-color: #f9f9f9;
  border: 1px dashed #a0a0a0;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 120px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImgStyle = styled.img`
  width: 120px;
  background-color: white;
  border: 1px solid #b5b5b5;
  border-radius: 3px;
`;

const TextStyle = styled.div`
  font-size: 14px;
  color: #333;
  text-align: center;
`;

const ButtonStyle = styled.button`
  font-size: 15px;
  width: 70px;
  background-color: rgb(249, 61, 61);
  color: white;
  padding: 3px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(220, 50, 50);
    transform: scale(1.1);
  }
`;

const AddPokemon = ({ img_url, korean_name, id }) => {
  const { removePokemon } = useContext(PokeContext);

  return (
    <OneCardStyle>
      <ImgStyle src={img_url} alt={korean_name} />
      <TextStyle>
        <h3>{korean_name}</h3>
        <p>{`No. ${id.toString().padStart(3, "0")}`}</p>
      </TextStyle>
      <ButtonStyle onClick={() => removePokemon({ id })}>삭 제</ButtonStyle>
    </OneCardStyle>
  );
};

export default AddPokemon;
