import axios from "axios";
import { useEffect, useState, useReducer } from "react";

interface ReducerType {
  state: {
    data: string[];
    loading: boolean;
    error: string;
  };
}

type ActionType = {
  action: {
    type: string;
    payload: string;
  };
};

/* actions 타입 설정 */
const loading = true;

// reducer 설정
const dataReducer = (state: any, action: any) => {
  switch (action.type) {
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "loading":
      return { ...state, loading: true, data: action.payload };
    case "error":
      return { ...state, loading: false, data: action.payload };
  }
};
/* 초기값 설정 */
const init = {
  data: '',
  loading: true,
  error: '',
};

function useGetData(url: string) {
  const [state, dispatch] = useReducer(dataReducer, init);

  useEffect(() => {
    function fetch() {
      dispatch({ type: "loading" });
      axios
        .get(url)
        .then((response) => {
          if(typeof response.data  === 'string') return 
          console.log(response.data)
          dispatch({ type: "success", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "error", payload: error });
        });
    }

    fetch();
  }, [url]);
  return state
}

export default useGetData;
