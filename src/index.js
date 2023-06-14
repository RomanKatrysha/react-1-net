import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id:1, message:"Hi, how are you?", likesCount: 0},
    {id:2, message:"It's my first post", likesCount: 32},
    {id:3, message:"fjfjfj", likesCount: 2}
];
let dialogsData = [
    {id: 1, name: "Sveta"},
    {id: 2, name: "Vasy"},
    {id: 3, name: "Pety"},
    {id: 4, name: "Koly"},
];
let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "fjffdlsfsj"},
    {id: 4, message: "Yo Yo YO"},
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
