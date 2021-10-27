import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FeedContext } from "../context/FeedState";
import AddGif from "./AddGif";

const AddPost = () => {
  const { feedData, setFeedData, gifToggle, setGifToggle } =
    useContext(FeedContext);

  const [description, setDescription] = useState("");
  const createPost = () => {
    const feedCombined = {
      title: description,
      image:
        "https://www.positronx.io/wp-content/uploads/2019/09/react-autocomplete-6802-01.gif",
    };

    setFeedData([...feedData, feedCombined]);
  };
  return (
    <AddPostStyled>
      <InputBox>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputBox>
      <GifStyled onClick={() => setGifToggle(!gifToggle)}>
        <button>Add GIF</button>
      </GifStyled>
      {gifToggle && <AddGif />}
      <PostButton onClick={() => createPost()}>
        <button>Post</button>
      </PostButton>
    </AddPostStyled>
  );
};

export default AddPost;

const AddPostStyled = styled.div`
  margin-top: 3rem;
  background-color: #ffffff;
`;

const InputBox = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: #e9ecef;
    padding: 1rem 2rem;
    border-radius: 12px;
  }
`;

const GifStyled = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e9ecef;

  button {
    background-color: #e9ecef;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 6px;
    transition: all ease-in-out 0.3s;
    :hover {
      background-color: #e5e5e5;
    }
  }
`;

const PostButton = styled.div`
  text-align: right;
  padding: 1rem 2rem 1rem 0;
  button {
    color: #ffffff;
    font-weight: 600;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background-color: #4ea8de;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    :hover {
      background-color: #5390d9;
    }
  }
`;
