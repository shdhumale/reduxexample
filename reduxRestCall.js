//We are using Axios and Thunk for making REST call using Redux
//As per process we will first follow this three steps 
//1- create ActionInitiator
//2- Create Reducers that take state = InitialState and Action as parameters
//3- Create Store 
//Our requirement is 1- Mak a ASync Rest call 2- Till the call is working keeping loading parameter true 3- On success (a) keeping loading parameter true and (b) fill the data 4-  on error (a) keeping loading parameter true (b)) fill the error with message  and (c)  make/set the data error as empty
//SAR => I-AIR -ST => CGSD (Store - Action-Reducer => InitialState, Action, ActionInitiator, Reducer, Store - [Createstore, getstate, subscribe, dispatchaction, unsubscribe], thunk Async Function) -

const redux = require("redux")
const applyMiddleware = redux.applyMiddleware
const reduxThunk = require("redux-thunk").default
const axios = require("axios")

//1- Declare initialState

const initialState = {
    loading: false,
    users: [],
    error: ''

}

//2- Create Action

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_ERROR = "FETCH_USER_ERROR"


//3- Create Action Initiators

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST

    }

}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users

    }
}
const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error

    }
}

//4- Create Reducers


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''

        }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: [],
            error: action.payload
        }
    }

}

//6- Create Thunk Async Function this will return a Async function rather than action object as we defined in other action creater. Also this has ability to dispath the action


const fetchUsers = () => {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            }
        ).catch(
            error => {
                const errors = error.Message
                dispatch(fetchUserError(errors))
            }
        )
    }
}

//5- Create store CGSD

const store = redux.createStore(reducer, applyMiddleware(reduxThunk))
console.log('Initial state', store.getState())
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())


