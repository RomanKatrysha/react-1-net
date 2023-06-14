import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = function (props) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}
                     className={({isActive}) => isActive ? s.active : ""}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;