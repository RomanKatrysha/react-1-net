import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = function (props) {
    function addMessage(){
        let textMessage = newMessage.current.value;
        alert(textMessage);

    }
    let newMessage = React.createRef();


    let dialogsElements =
        props.dialogesPage.dialogsData.map(elem =>
            <DialogItem name={elem.name} id={elem.id}/>);

    let messagesElements =
        props.dialogesPage.messagesData.map(elem =>
            <Message message={elem.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;