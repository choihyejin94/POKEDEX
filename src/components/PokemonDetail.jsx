import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/mockData";

const AllPoke = styled.div`
  background-color: #ffa8a8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
  min-height: 100vh;
  width: 100%;
`;

const NumberImg = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
`;

const ImgDetail = styled.img`
  width: 220px;
`;

const Numberstyle = styled.p`
  font-size: 12px;
  color: gray;
  text-align: center;
  margin: 20px;
`;

const TextDetail = styled.div`
  text-align: center;
  line-height: 2.1;
  max-width: 400px;
`;

const Namestyle = styled.h3`
  font-weight: 800;
  font-size: 20px;
`;

const ButtonDetail = styled.button`
  background-color: #555555;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  width: 130px;
  height: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const detailPokemon = MOCK_DATA.find((data) => data.id === parseInt(id));

  const handleNavigate = () => {
    navigate(-1); // 이전 페이지로 돌아가기
  };

  const { img_url, korean_name, types, description } = detailPokemon;
  const NumberId = `No. ${id.toString().padStart(3, "0")}`;

  return (
    <AllPoke>
      <NumberImg>
        <ImgDetail src={img_url} />
        <Numberstyle>{NumberId}</Numberstyle>
      </NumberImg>
      <TextDetail>
        <Namestyle>{korean_name}</Namestyle>
        <p>{types.join(", ")}</p>
        <p>{description}</p>
      </TextDetail>
      <ButtonDetail onClick={handleNavigate}>뒤로 가기</ButtonDetail>
    </AllPoke>
  );
};

export default PokemonDetail;
