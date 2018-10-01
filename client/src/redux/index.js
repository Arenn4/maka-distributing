import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

// Initial State w Array
const initState = {
    breweryData: []
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


 //Reducer:
const reducer = (prevState = initState, action) => {
    switch (action.type){
        case "GET_BRANDS":
            return{
                breweryData: action.breweryData
            }
        default:
            return prevState
    }
}

 
export default createStore(reducer, applyMiddleware(thunk))
