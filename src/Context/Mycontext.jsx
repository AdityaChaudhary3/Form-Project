import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const MyContext = createContext();

// Create a provider component that will wrap your app
export const MyContextProvider = ({ children }) => {
  const [globalObject, setGlobalObject] = useState([]);
   
  return (
    <MyContext.Provider value={{ globalObject, setGlobalObject }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to simplify context usage
export const useMyContext = () => {
  return useContext(MyContext);
};
