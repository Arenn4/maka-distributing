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

//GET DATA
export const getBrands = () => {
    return dispatch => { 
        newAxios.get(`/brewers`).then(res => {
            dispatch({
                type: "GET_BRANDS",
                breweryData: res.data
            })
        })
    }
}

//POST NEW DATA
export const addBrands = (newBrand) => {
    return dispatch => {
        newAxios.post("/brewers", newBrand).then(res => {
            dispatch({
                type: "ADD_BRANDS",
                breweryData: res.data
            })
        })
    }
}

//UPDATE CURRENT DATA
export const updateBrands = (_id, obj) => {
    return dispatch => {
        newAxios.put(`/brewers/${_id}`, obj).then(res => {
            dispatch({
                type: "UPDATE_BRANDS",
                breweryData: res.data
            })
        })
    }
}

//DELETE AN ITEM IN OUR DATA
export const deleteBrands = (_id) => {
    return dispatch => {
        newAxios.delete(`/brewers/${_id}`).then(res => {
            dispatch({
                type: "DELETE_BRANDS",
                _id
            })
        })
    }
}

//unsure about this part and authenticate
export const signUp = (userInfo) => {
    return dispatch => {
        newAxios.post("/auth/signup",  userInfo).then(response => {
            const {token, user} = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(authenticate(user))
        })
        .catch(err => {
            console.error(err);
            dispatch(authError("signup", err.response.status));
        })
    }
}
//authenticate DOUBLE CHECK THIS SHIT
export const authenticate = user => {
    return {
        type: "AUTHENTICATE",
        user
    }
}
//login
export const login = (credentials) => {
    return dispatch => {
        newAxios.post("/auth/login", credentials).then(response => {
            const {token, user} = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            dispatch(authenticate(user))
        })
        .catch((err) => {
            console.error(err);
            dispatch(authError("login", err.response.status));
        })
    }
}
//logout DOUBLE CHECK THIS 
export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOG_OUT"
    }
}

//error handling DOUBLE CHECK THIS
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
            return {
                breweryData: action.breweryData
            }
        case "ADD_BRANDS":
            return {
                breweryData: [...prevState.breweryData, action.breweryData]
            }
        case "UPDATE_BRANDS":
            return {
                breweryData: prevState.breweryData.map(brewers => brewers._id === action.breweryData._id ? action.breweryData : brewers)
            }
        case "DELETE_BRANDS":
            return {
                breweryData: prevState.breweryData.filter(brewers => brewers._id !== action._id)
            }
        case "AUTHENTICATE":
            return {
                breweryData: action.prevState,
                ...prevState,
                ...action.user,
                isAuthenticated: true
            }
        case "LOG_OUT":
            return initState
        default:
            return prevState
    }
}

 
export default createStore(reducer, applyMiddleware(thunk))
