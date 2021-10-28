import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { FeedContext } from "../context/FeedState";

const AddGif = () => {
  const { gifToggle, setGifToggle, gif, setGif, setSelectedGif } =
    useContext(FeedContext);
  // const [gifSearch, setGifSearch] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  var GifUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=5`;

  const getGifApi = async (ApiUrl) => {
    const { data } = await axios.get(ApiUrl);
    return data;
  };

  useEffect(() => {
    const getAPIData = async () => {
      // if (gifSearch !== "") {
      //   GifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=5&q=${gifSearch}`;
      // }
      const res = await getGifApi(GifUrl);
      if (res) {
        setGif(res.data);
      }
    };
    getAPIData();
    // }, [gifSearch]);
  }, []);

  const handleClick = (url) => {
    setSelectedGif(url);
    setGifToggle(!gifToggle);
  };

  return (
    <AddGifyStyled>
      <GifContainer>
        {/* <input
          type="text"
          placeholder="Search"
          value={gifSearch}
          onChange={(e) => setGifSearch(e.target.value)}
        /> */}

        <GifImage>
          {gif.map(
            ({
              images: {
                original: { url },
              },
              id,
            }) => (
              <img key={id} src={url} alt="" onClick={() => handleClick(url)} />
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
  @media (max-width: 740px) {
    width: 25rem;
    padding: 1rem;
  }
  @media (max-width: 540px) {
    width: 18rem;
  }
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
  cursor: pointer;
  overflow-y: scroll;
  height: 20rem;

  img {
    object-fit: contain;
    width: 100%;
  }
`;
