
import './App.css';
import Header from "./componeents/Header/Header";
import Nav from "./componeents/Nav/Nav";
import Profile from "./componeents/Profile/Profile";
import Dialogs from "./componeents/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import New from "./componeents/New/New";
import Music from "./componeents/Music/Music";



function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs/*" element = {<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                <Route path="/profile" element = {<Profile postsData={props.postsData}/>}/>
                <Route path="/new" element = {<New/>}/>
                <Route path="/music" element = {<Music/>}/>
            </Routes>

        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
