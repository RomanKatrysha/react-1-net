import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = function (props) {

    function messageChange(e){

        let textMessage = e.target.value;//newMessage.current.value;
        props.messageChange(textMessage);
    }
    function addMessage(){
       props.addMessage();

    }

    let dialogsElements =
        props.dialogesPage.dialogsData.map(elem =>
            <DialogItem name={elem.name} id={elem.id}  key={elem.id}/>);

    let messagesElements =
        props.dialogesPage.messagesData.map(elem =>
            <Message message={elem.message}  key={elem.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder="Enter you message" onChange={messageChange} value={props.dialogesPage.contentNewMessage} />
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;