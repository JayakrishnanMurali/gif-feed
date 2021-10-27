import React, { createContext, useState } from "react";

export const FeedContext = createContext();

const FeedState = ({ children }) => {
  const [feedData, setFeedData] = useState([]);

  const [gifToggle, setGifToggle] = useState(false);

  const [gif, setGif] = useState([]);

  return (
    <FeedContext.Provider
      value={{
        feedData: feedData,
        setFeedData,
        gifToggle: gifToggle,
        setGifToggle,
        gif: gif,
        setGif,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedState;
