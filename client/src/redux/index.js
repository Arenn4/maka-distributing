import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initState = {
    test: []
}

const reducer = (prevState = initState, action) => {
    switch (action.type){
        case "TEST":
            return{
                test: test
            }
    }
}
 
export default createStore(reducer, applyMiddleware(thunk))
