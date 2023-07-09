import React, { createContext, useState } from "react";

export const CommunitiesContext = createContext();

const CommunitiesContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CommunitiesContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </CommunitiesContext.Provider>
  );
};

export default CommunitiesContextProvider;
