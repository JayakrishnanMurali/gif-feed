import React, { useContext } from "react";
import styled from "styled-components";
import { FeedContext } from "../context/FeedState";

const AddGif = () => {
  const { gifToggle, setGifToggle } = useContext(FeedContext);

  return (
    <AddGifyStyled>
      <GifContainer>
        <input type="text" placeholder="Search" />

        <CancelButton onClick={() => setGifToggle(!gifToggle)}>
          Cancel
        </CancelButton>
      </GifContainer>
    </AddGifyStyled>
  );
};

export default AddGif;

const AddGifyStyled = styled.div`
  background-color: rgb(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const GifContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 10px;
  width: 30rem;
  padding: 2rem;
  input {
    background-color: #e9ecef;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }
`;

const CancelButton = styled.button`
  border-radius: 6px;
  font-weight: 700;
  border: none;
  outline: none;
  margin-top: 2rem;
  background-color: #e9ecef;
  cursor: pointer;
  width: 6rem;
  padding: 0.5rem 1rem;
`;
