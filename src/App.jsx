import styled from "styled-components";
import "./App.css";
import Router from "./shared/Router";

const FontStyle = styled.div`
  fontfamily: "NotoSansKR","sans-serif", "cursive";
`;

function App() {
  return (
    <FontStyle>
      <Router />
    </FontStyle>
  );
}

export default App;
