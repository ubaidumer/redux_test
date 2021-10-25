import React from "react";
import  ReactDOM  from "react-dom";

import App from "./components/App";
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addCharacterById } from "./actions";

const store = createStore(rootReducer); 
console.log("SUPERHEROS",store.getState());
store.subscribe(()=>console.log("ADDED SUPERHEROS",store.getState()));
store.dispatch(addCharacterById(2));



ReactDOM.render(
    <Provider store={store}>
     <App/>
     </Provider>
    ,document.getElementById('root'));