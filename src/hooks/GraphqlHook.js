import React, { useContext } from "react";
import { NetworkContext } from "../contexts";

export const useGraphqlRequest = (query, values, mapper) => {
  const {
    NetworkCtx: { graphqlUrl },
  } = useContext(NetworkContext);
};
