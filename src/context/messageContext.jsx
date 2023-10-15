import { createContext, useContext, useState } from "react";

const InputContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useInputContext = () => useContext(InputContext);

// eslint-disable-next-line react/prop-types
export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState([]);

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
