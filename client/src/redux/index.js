import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

let newAxios = axios.create()

newAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorication = `Bearer ${token}`;
    return config;
})

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
}

//Actions:  get requests, post, put

export const getBrands = () => {
    return dispatch => { 
        axios.get(`/brewers`).then(res => {
            dispatch({
                type: "GET_BRANDS",
                breweryData: res.data
            })
        })
    }
}

//unsure about this part and authenticate
export const signUp = (userInfo) => {
    return dispatch => {
        axios.post("/auth/signup",  userInfo).then(res => {
            const {token, user} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(authenticate(user))
        })
        .catch(err => {
            console.error(err);
            dispatch(authError("signup", err.res.status));
        })
    }
}
//authenticate
export const authenticate = user => {
    return {
        type: "AUTHENTICATE",
        user
    }
}
//login
export const login = (credentials) => {
    return dispatch => {
        axios.post("/auth/login", credentials).then(res => {
            const {token, user} = res.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(authenticate(user))
        })
        .catch((err) => {
            console.error(err);
            dispatch(authError("signup", err.res.status));
        })
    }
}
//logout
export const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOG_OUT"
    }
}

//error handling
export const authError = (key, errCode) => {
    return {
        type: "AUTH_ERROR",
        key,
        errCode
    }
}


 //Reducer:
const reducer = (prevState = initState, action) => {
    switch (action.type){
        case "GET_BRANDS":
            return{
                breweryData: action.breweryData
            }
        case "AUTHENTICATE":
            return{
                breweryData: action.prevState,
                ...prevState,
                ...action.user,
                isAuthenticated: true
            }
        case "LOG_OUT":
            return prevState
        default:
            return prevState
    }
}

 
export default createStore(reducer, applyMiddleware(thunk))
