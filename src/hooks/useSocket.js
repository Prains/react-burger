import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  websocketReceived,
  websocketConnected,
  websocketDisconnected,
} from "../services/reducers/WebSocket";

const useSocket = (url) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.websocket);
  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch(websocketReceived(data));
    };
    socket.onopen = () => {
      dispatch(websocketConnected());
    };
    socket.onclose = () => {
      dispatch(websocketDisconnected());
    };
    return () => {
      socket.close();
    };
  }, [dispatch, url]);
  return data;
};

export default useSocket;
