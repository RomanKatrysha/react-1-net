import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
//function  rerenderTree(state){
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App   />
            </Provider>
        </React.StrictMode>
    );//}
//store.subscribe(function(){ rerenderTree(store.getState())});


//rerenderTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
