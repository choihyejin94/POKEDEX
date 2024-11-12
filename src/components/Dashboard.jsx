import React, { useContext } from "react";
import styled from "styled-components";
import ball from "../img/pokeball.png";
import PokeContext from "../context/PokeContext";
import AddPokemon from "./AddPokemon";

const DashboardStyle = styled.div`
  background-color: #ffffff;
  border: 1px solid transparent;
  padding: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Textstyle = styled.p`
  color: black;
  text-shadow: 0 1px 2px gray;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
`;

const AllBall = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  gap: 30px;
  flex-wrap: wrap;
`;

const MonsterBall = styled.div`
  background-color: white;
  border: 2px dashed gray;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  width: 120px;
  height: 120px;
  justify-items: center;
  align-items: center;
  position: relative; /* 자식 요소 절대 위치 설정 */

  &:hover {
    transform: scale(1.05);
  }
`;

const ABall = styled.img`
  width: 70px;
  position: absolute; /* 절대 위치로 설정 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Dashboard = () => {
  const { myPokes, setMyPokes } = useContext(PokeContext);
  const totalSlots = 6;

  return (
    <DashboardStyle>
      <Textstyle>포켓몬 도감</Textstyle>
      <AllBall>
        {Array.from({ length: totalSlots }, (_, index) => {
          if (index < myPokes.length) {
            const { img_url, korean_name, id } = myPokes[index];
            return (
              <AddPokemon
                key={index}
                img_url={img_url}
                korean_name={korean_name}
                id={id}
                myPokes={myPokes}
                setMyPokes={setMyPokes}
              />
            );
          } else {
            return (
              <MonsterBall key={index}>
                <ABall src={ball} alt="추가" />
              </MonsterBall>
            );
          }
        })}
      </AllBall>
    </DashboardStyle>
  );
};

export default Dashboard;
