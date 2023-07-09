import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wsConnect, wsDisconnect } from "../services/actions";

const useSocket = (url: string) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.websocket);

  useEffect(() => {
    dispatch(wsConnect(url));

    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch, url]);

  return data;
};

export default useSocket;
