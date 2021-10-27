import React, { useContext } from "react";
import styled from "styled-components";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import { FeedContext } from "./context/FeedState";

function App() {
  const { feedData } = useContext(FeedContext);

  return (
    <AppStyled>
      <AddPost />
      {feedData.map((item, i) => (
        <Feed key={i} text={item.title} image={item.image} />
      ))}
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.section`
  max-width: 978px;
  margin: auto;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    max-width: 678px;
  }
  @media (max-width: 740px) {
    max-width: 500px;
  }
  @media (max-width: 540px) {
    max-width: 300px;
  }
`;
