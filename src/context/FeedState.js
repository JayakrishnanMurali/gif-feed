import React, { createContext, useState } from "react";

export const FeedContext = createContext();

const FeedState = ({ children }) => {
  const [feedData, setFeedData] = useState([]);

  return (
    <FeedContext.Provider value={{ feedData: feedData, setFeedData }}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedState;
