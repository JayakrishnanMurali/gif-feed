import React from "react";
import styled from "styled-components";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";

function App() {
  return (
    <AppStyled>
      <AddPost />
      {/* <Feed /> */}
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.section`
  max-width: 978px;
  margin: auto;
`;
