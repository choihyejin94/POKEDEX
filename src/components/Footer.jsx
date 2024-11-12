import React from "react";
import styled from "styled-components";
import FootImg from "../img/pokemon-korea.png";

const FooterStyle = styled.div`
  font-size: medium;
  text-align: end;
  color: white;
  background-color: #000000;
  width: 100vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const ImgStyle = styled.img`
  margin: 10px;
  width: 300px;
`;
const TextStyle = styled.div`
  width: 100%;
  background-color: #3a3a3a;
  margin: 10px;
  padding: 10px 25px;
  box-sizing: border-box; /* padding과 margin을 포함하여 계산 */
`;

const Footer = () => {
  return (
    <FooterStyle>
      <ImgStyle src={FootImg} alt="POKEMON_KOREA" />
      <br />
      <TextStyle>
        TEL.032.1234.5678 / 인천광역시 내일배움캠프구 스파르타로
        <br />
        ©Hyejin corp.
      </TextStyle>
      <br />
    </FooterStyle>
  );
};

export default Footer;
