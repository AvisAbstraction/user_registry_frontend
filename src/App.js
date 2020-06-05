import React from "react";
import "./App.css";
import { GlobalProvider, NetworkProvider } from "./contexts";
import RouteApp from "./routes";

function App() {
  return (
    <GlobalProvider>
      <NetworkProvider>
        <RouteApp />
      </NetworkProvider>
    </GlobalProvider>
  );
}

export default App;
