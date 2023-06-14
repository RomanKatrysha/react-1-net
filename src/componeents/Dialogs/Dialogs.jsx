import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = function (props) {


    let dialogsElements = props.dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id}/>);

    let messagesElements = props.messagesData.map(elem => <Message message={elem.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;