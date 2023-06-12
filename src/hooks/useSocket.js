"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wsConnect, wsDisconnect } from "../services/actions";

const useSocket = (url) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.websocket);

  useEffect(() => {
    dispatch(wsConnect(url));

    return () => {
      wsDisconnect();
    };
  }, [dispatch, url]);

  return data;
};

export default useSocket;
