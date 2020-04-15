//console.log("this is test")
const redux = require("redux")
const reduxLogger = require("redux-logger")
const createStore = redux.createStore
const logger = reduxLogger.createLogger({
    //empty options
});
const applyMiddleWare = redux.applyMiddleware


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//'- Action :- indicate what need to be done with the state which is readonly. Your application must tell redux through/by firing the action to redux from your application telling what need to be done with the state. No Direct update is avaialble, 
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'this is but action method and first in redux'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

//reducer funtions (prevState, action) ==> return newState

const initialCakeState = {
    numberOfCake: 10
}

const initialIceCreamState = {
    numberOfIceCream: 20
}



//'- Reducer:- Actully carrier out the change in the state. i.e. we need to write the code in reducer (pure function that teake prevState and action as input) and change the new state depending. so how the state is transfer is depending on this reducer.
//In short our application subscribe to redux, it store its state in redux, It cannot change the state directly it has to emit / dispath the action which is given to reducer which is pure function depending on the action type it will modify the state and then redux inform / send the new state to our application as it is subscribed.
const reducerCake = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1

        }

        default:
            return state

    }

}

const reducerIceCream = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1

        }
        default:
            return state

    }

}

//		'- Store :- GSD - Getstate - to get the state of the application, susbcribe(listener) for subscrbing and unsubscribing  the listener as the state change and dispatch(action) is used to make change in state in the store.
//It has four part 1- Hold application state, get the state, subscribe the application, dispacth action and finally unsubscribe
//const store = createStore(reducer)
const multipleReducer = redux.combineReducers({ cake: reducerCake, iceCream: reducerIceCream })
//const store = redux.createStore(reducer)
const store = redux.createStore(multipleReducer, applyMiddleWare(logger))
console.log("Initial state", store.getState())
//const unsubscribe = store.subscribe(() => { console.log('Updated state', store.getState()) })
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()