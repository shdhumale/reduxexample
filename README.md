# reduxexample
This repository contains Redux example used in Reactjs

Redux is the third party extension that can be used for any Java script application as third party library.It act as a predictable state container .

Following are the important aspect of the Redux
-> SAR - MA :- 
		'- Store :- store the state of the Application. Means every application must have single state to be store, 
		'- Action :- indicate what need to be done with the state which is readonly. Your application must tell redux through/by firing the action to redux from your application telling what need to be done with the state. No Direct update is avaialble, 
		'- Reducer:- Actully carrier out the change in the state. i.e. we need to write the code in reducer (pure function that teake prevState and action as input) and change the new state depending. so how the state is transfer is depending on this reducer.
		In short our application subscribe to redux, it store its state in redux, It cannot change the state directly it has to emit/dispath the action which is given to reducer which is pure function depending on the action type it will modify the state and then redux inform/send the new state to our application as it is subscribed.
		'- Store :- CGSD - Create store , Getstate - to get the state of the application, susbcribe(listener) for subscrbing and unsubscribing  the listener as the state change and dispatch(action) is used to make change in state in the store.
		'-MiddleWare :- It is 3rd party extension act between dispatching the action and receving to reducers. It can be used for log, crash reporting, performing async task etc.
		'-Asyn Action :-  this is generally achieved using Thunk external library in Redux. It help us to get the action creater to return function instead of action object.
		
		Let take an example or Use case
		SAR - State (Data + Error + Loading) , Action (User request, User error, User succssess), Reducer funtion (User request => loading=true, User error => loading = false, error=true , User success =>loading = true, data=User) use axios and thunk(as middleware)
		
		Code As given below 
		//We are using Axios and Thunk for making REST call using Redux
//As per process we will first follow this three steps 
//1- create ActionInitiator
//2- Create Reducers that take state = InitialState and Action as parameters
//3- Create Store 
//Our requirement is 1- Mak a ASync Rest call 2- Till the call is working keeping loading parameter true 3- On success (a) keeping loading parameter true and (b) fill the data 4-  on error (a) keeping loading parameter true (b)) fill the error with message  and (c)  make/set the data error as empty
//SAR => I-AIR -ST => CGSD (Store-Action-Reducer => InitialState, Action, ActionInitiator, Reducer, Store - [Createstore, getstate, subscribe, dispatchaction, unsubscribe], thunk Async Function) -
