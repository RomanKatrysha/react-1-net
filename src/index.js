import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {changeFaeldMyPost, addPost, subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
function  rerenderTree(state,addPost,changeFaeldMyPost){
    root.render(
        <React.StrictMode>
            <App state = {state} addPost = {addPost} changeFaeldMyPost={changeFaeldMyPost} />
        </React.StrictMode>
    );}
subscribe(rerenderTree);


rerenderTree(state,addPost,changeFaeldMyPost);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
