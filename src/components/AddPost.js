import React from "react";
import styled from "styled-components";

const AddPost = () => {
  return (
    <AddPostStyled>
      <InputBox>
        <input type="text" placeholder="What's on your mind?" />
      </InputBox>
      <GifStyled>
        <button>Add GIF</button>
      </GifStyled>
      <PostButton>
        <button>Post </button>
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
