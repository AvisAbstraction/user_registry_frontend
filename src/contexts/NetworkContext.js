import React, { useState, createContext } from "react";
import { apiUrl } from "../config";

const initialCtx = {
  NetworkCtx: {
    apiUrl,
  },
};

export const NetworkContext = createContext(initialCtx);

export const NetworkConsumer = NetworkContext.Consumer;

export const NetworkProvider = ({ children }) => {
  const [NetworkCtx, setNetworkCtx] = useState(initialCtx.NetworkCtx);

  return (
    <NetworkContext.Provider value={{ NetworkCtx, setNetworkCtx }}>
      {children}
    </NetworkContext.Provider>
  );
};
