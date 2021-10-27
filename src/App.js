import React, { useContext } from "react";
import styled from "styled-components";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import { FeedContext } from "./context/FeedState";

function App() {
  const { feedData, setFeedData } = useContext(FeedContext);

  console.log(feedData);

  return (
    <AppStyled>
      <AddPost />
      <Feed text={"description"} image={""} />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.section`
  max-width: 978px;
  margin: auto;
  margin-bottom: 2rem;
`;
