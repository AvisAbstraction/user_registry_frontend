import React, { createContext, useState } from "react";

const initialCtx = {
  GlobalCtx: {
    appName: "My App",
    appDomain: "",
  },
  setGlobalCtx: () => null,
};

export const GlobalContext = createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export const GlobalProvider = ({ children }) => {
  const [GlobalCtx, setGlobalCtx] = useState(initialCtx.GlobalCtx);
  return (
    <GlobalContext.Provider value={{ GlobalCtx, setGlobalCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
