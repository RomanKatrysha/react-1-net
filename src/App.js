
import './App.css';
import Header from "./componeents/Header/Header";
import Nav from "./componeents/Nav/Nav";
import Profile from "./componeents/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import New from "./componeents/New/New";
import Music from "./componeents/Music/Music";
import DialogsContainer from "./componeents/Dialogs/DialogsContainer";
import Users from "./componeents/Users/Users";
import UsersContainer from "./componeents/Users/UsersContainer";

function App(props) {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs/*" element = {<DialogsContainer />  }/>
                <Route path="/profile"  element = {<Profile store={props.store}/>  } />
                <Route path="/new" element = {<New/>}/>
                <Route path="/music" element = {<Music/>}/>
                <Route path="/users" element = {<UsersContainer/>}/>
            </Routes>

        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
