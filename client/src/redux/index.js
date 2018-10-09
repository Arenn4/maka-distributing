import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import axios from "axios";

let newAxios = axios.create();

newAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorication = `Bearer ${token}`;
  return config;
});

// Initial State w Array
const initState = {
  breweryData: [],
  username: "",
  isAdmin: false,
  isAuthenticated: false,
  authErrCode: {
    signup: "",
    login: ""
  }
};

//Actions:  get requests, post, put
export const getBrands = () => {
  return dispatch => {
    axios.get(`/brewers`).then(res => {
      dispatch({
        type: "GET_BRANDS",
        breweryData: res.data
      });
    });
  };
};

export const sendEmail = (msg) => {
  return (dispatch) => {
      axios.post(`/send`, msg).then(res => {
          dispatch({
              type: "SEND_EMAIL",
          })
      })
  }
}


//Reducer:
const reducer = (prevState = initState, action) => {
  switch (action.type) {
    case "GET_BRANDS":
      return {
        breweryData: action.breweryData
      };
    case "SEND_EMAIL":
          return;
    default:
      return prevState;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
