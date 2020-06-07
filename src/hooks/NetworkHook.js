import { useContext, useState } from "react";
import { NetworkContext } from "../contexts";
import Axios from "axios";

export const useNetworkRequest = (url, body, method) => {
  const initialStatus = { status: null, statusText: "" };
  const {
    NetworkCtx: { apiUrl },
  } = useContext(NetworkContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [mapped, setMapped] = useState(null);
  const [status, setStatus] = useState(initialStatus);

  url = `${apiUrl}${url}`;

  const config = {
    method,
    url,
    data: body,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  };

  const resetState = () => {
    setLoading(false);
    setError(false);
    setData(null);
    setMapped(null);
    setStatus(initialStatus);
  };
  const makeNetworkRequest = async () => {
    console.log("body", body);
    resetState();
    Axios(config)
      .then((result) => {
        setData(result);
        setLoading(false);
        // if (mapper) {
        //   mapper(result)
        //     .then((mappedData) => setMapped(mappedData))
        //     .catch((err) => {
        //       console.log(error, "mappederror");
        //       setError(true);
        //     });
        // }
      })
      .catch((err) => {
        console.log(error, "err");
        setLoading(false);
        setError(true);
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
