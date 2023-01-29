import './index.css';
import { createStore, applyMiddleware, compose } from "redux";
import ReactDOM from 'react-dom';
import React from 'react';

import ReduxApp from './App-redux';
import { Provider } from 'react-redux';

// import all reducers as reducer from reducers directory
import reducer from "./reducers"
import { logging } from './middleware/logging';

// --- ACTION --> DISPATCHER --> REDUCER --> CHANGE THE STATE OF THE STORE


// STORE ---------------------------------------------------->
// store is coupled with a reducer 
// so we pass reducer into createStore() as a parameter
// --------------------------------------------------------------------------
// создадим store, при этом, createStore() будет изменять содержание store
const store = createStore(reducer, compose (applyMiddleware(logging),
window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__() ));





/*

// SUBSCRIBE --------------------------------------------->
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
});






// --- ACTION --> DISPATCHER ------------------------------------------> 
const testButton = document.querySelector(".testButton")
testButton.addEventListener("click",function() {
  
  // get value from tag "testInput" after user's input
  const inputValue = document.querySelector(".testInput").value;

  console.log("INPUT", inputValue);
  
  // ACTION ------------------------------------------->
  // create an action (this action will be passed into
  // myreducer via dispatcher in order to change the state)
  const changeStore = {type: 'WRITE', payload: inputValue}

  // DISPATCHER - CHANGES STORE
  // create dispatcher in order to get an action and pass it to reducer
  store.dispatch(changeStore) 
 
});

**/


// обернем ReduxApp в спец. компонент Provider, который принимает store в качестве props
ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('root')
)