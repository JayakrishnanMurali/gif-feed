import React from "react";
import styled from "styled-components";

const Feed = ({ text, image }) => {
  return (
    <FeedStyled>
      <TitleStyled>
        <h1>{text}</h1>
      </TitleStyled>
      {image ? (
        <ImageStyled>
          <img src={image} alt="" />
        </ImageStyled>
      ) : (
        ""
      )}
    </FeedStyled>
  );
};

export default Feed;

const FeedStyled = styled.div`
  background-color: #ffffff;
  margin-top: 1rem;
  padding: 2rem;
`;

const TitleStyled = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;
const ImageStyled = styled.div`
  img {
    object-fit: cover;
  }
`;
