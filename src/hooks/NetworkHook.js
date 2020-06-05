import React, { useContext, useState } from "react";
import { NetworkContext } from "../contexts";
import Axios from "axios";

export const useNetworkRequest = (url, body, mapper) => {
  const initialStatus = { status: null, statusText: "" };
  const {
    NetworkCtx: { apiUrl },
  } = useContext(NetworkContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [mapped, setMapped] = useState(null);
  const [status, setStatus] = useState(initialStatus);

  const method = data ? "POST" : "GET";
  const url = `${apiUrl}${url}`;

  const config = {
    method,
    url,
    data: body,
  };

  const resetState = () => {
    setLoading(false);
    setError(false);
    setData(null);
    setMapped(null);
    setStatus(initialStatus);
  };
  const makeNetworkRequest = async () => {
    resetState();
    Axios.post(config)
      .then((result) => {
        setData(result);
        setLoading(false);
        if (mapper) {
          mapper(result)
            .then((mappedData) => setMapped(mappedData))
            .catch((err) => {
              console.log(error, "mappederror");
              setError(true);
            });
          setMapped();
        }
      })
      .catch((err) => {
        console.log(error, "err");
        setLoading(false);
        setError(false);
      });
  };

  return {
    loading,
    error,
    status,
    data,
    mapped,
    refetch: makeNetworkRequest,
  };
};
