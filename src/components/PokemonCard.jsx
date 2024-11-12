import React, { useContext } from "react";
import { useParams, Link as TextLink } from "react-router-dom";
import styled from "styled-components";
import PokeContext from "../context/PokeContext";
import ball from "../img/icon_ball.png";

const OnePokeStyle = styled.form`
  background-color: #f9f9f9;
  border: 1px dashed #a0a0a0;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 140px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ImgPokeStyle = styled.img`
  width: 100%;
  height: auto;
  background-color: white;
  border: 1px solid #b5b5b5;
  border-radius: 3px;
  box-sizing: border-box;
`;

const TextPokeStyle = styled.div`
  font-size: 14px;
  color: #444;
  text-align: center;
  line-height: 1.1;
`;

const StyledLink = styled(TextLink)`
  text-decoration: none;
`;

const ButtonBall = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const MonsterBallImg = styled.img`
  height: 60px;
  transition: transform 0.2s;

  &:hover {
    transform: rotate(15deg); /* 마우스 오버 시 회전 효과 */
  }
`;

const PokemonCard = ({ img_url, korean_name, types, id }) => {
  const { IncludePokemon } = useContext(PokeContext);
  const params = useParams();

  const handleButtonClick = (e) => {
    e.preventDefault();
    IncludePokemon({ img_url, korean_name, types, id });
  };

  const NumberId = `No. ${id.toString().padStart(3, "0")}`;
  return (
    <StyledLink to={`/pokemon-detail/${id}`}>
      <OnePokeStyle>
        <ImgPokeStyle src={img_url} alt={korean_name} />
        <TextPokeStyle>
          <h3>{korean_name}</h3>
          <p>{NumberId}</p>
          <p>{types.join(",")}</p>
        </TextPokeStyle>
        <ButtonBall type="button" onClick={handleButtonClick}>
          <MonsterBallImg src={ball} alt="추가" />
        </ButtonBall>
      </OnePokeStyle>
    </StyledLink>
  );
};

export default PokemonCard;
