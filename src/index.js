import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Redux from "redux";

import { Provider } from 'react-redux';



// --------------------------------------------------------------------------
// создадим store, при этом, createStore() будет изменять содержание store

import {createStore} from "redux"

// store is coupled with a reducer 
// so we pass reducer into createStore() as a parameter
const store = createStore(myreducer);


// const initState = {
//   todo: [],
//   posts: []
// };

// reducer has two parameters:
// state - the state of the store, which is
// at the first time equal to an initial state
// then it will be updated
// ---
// we have to dispatch an action into the reducer
// and then it changes the state. 
function myreducer(state = [], action) {
  console.log(action, state)
  switch (action.type) {
    // case 'ADD_TODO': 
    //   return [
    //     state,
    //     action.todo
    //   ];
    case "WRITE":
      return [
        ...state,
        action.payload
      ];
    default:
      return state

  }

};




// Чтобы видеть изменения в store нужно на него подписаться
store.subscribe(() => {

  // make items element which represents "testUl" tag
  const items = document.querySelector(".testUl")


  // clear items array 
  items.innerHTML = '';
  document.querySelector('.testInput').value = ''

  // посмотреть, что есть в store и вывести это списком
  // применим функцию map() для каждого элемента (item), полученного из store
  store.getState().map(item => {

    // each item will be allocated into tag <li>
    // that is why the element 'li' will be created
    const li = document.createElement("li")

    // li tag will contain a text which is item
    li.textContent = item;

    // append each li-element inside a tag "testUl"
    items.appendChild(li);
  })
})


// --- ACTION --> DISPATCHER --> REDUCER --> CHANGE THE STATE
// create an action (this action will be passed into
// myreducer via dispatcher in order to change the state)
// const todoAction = {
//   type: 'ADD_TODO',
//   todo: 'buy milk'
// };



// create dispatcher in order to get an action and pass it to reducer
// store.dispatch(todoAction);




// ----------------------------------------------------------------------








// DISPATCHER - CHANGES STORE
// store.dispatch(changeStore);



// BUTTON
const testButton = document.querySelector(".testButton")

testButton.addEventListener("click",function() {
  const inputValue = document.querySelector(".testInput").value;

  console.log("INPUT", inputValue);
  
  store.dispatch({type: 'WRITE', payload: inputValue}) // ACTION
})



// ReactDOM.render(
//   <Provider store={store}>
//     {/* <App /> */}
//   </Provider>,
//   document.getElementById('root')
// )