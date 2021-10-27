import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { FeedContext } from "../context/FeedState";

const AddGif = () => {
  const { gifToggle, setGifToggle, gif, setGif } = useContext(FeedContext);

  const [gifSearch, setGifSearch] = useState("");

  const getGifApi = async () => {
    const { data } = await axios.get(
      "https://api.giphy.com/v1/gifs/trending?api_key=iXoDdQEw5vxLoWWpv3vYGU8HeotSdFZL&limit=5"
    );
    return data;
  };

  useEffect(() => {
    const getAPIData = async () => {
      const res = await getGifApi();
      if (res) {
        setGif(res.data);
      }
    };
    getAPIData();
  }, []);

  return (
    <AddGifyStyled>
      <GifContainer>
        <input
          type="text"
          placeholder="Search"
          value={gifSearch}
          onChange={(e) => setGifSearch(e.target.value)}
        />

        <GifImage>
          {gif.map(
            ({
              images: {
                downsized: { url },
              },
              id,
            }) => (
              <img key={id} src={url} alt="" />
            )
          )}
        </GifImage>

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

const GifImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow-y: scroll;
  height: 20rem;
  img {
    object-fit: contain;
    width: 100%;
  }
`;
