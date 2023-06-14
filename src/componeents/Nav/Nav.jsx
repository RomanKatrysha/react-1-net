import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = function (){
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className = {({ isActive }) =>isActive ? s.active : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className = {({isActive}) =>isActive ? s.active : ""}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/new" className = {({isActive}) =>isActive ? s.active : ""}>New</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = {({isActive}) =>isActive ? s.active : ""}>Music</NavLink>
            </div>
        </nav>
    );
}
export default Nav;