import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, messageChangeActionCreator} from "../../redux/messagerReducer";


const Dialogs = function (props) {
    function messageChange(e){
        let textMessage = e.target.value;//newMessage.current.value;
        props.dispatch(messageChangeActionCreator(textMessage));
    }
    function addMessage(){
       props.dispatch(addMessageActionCreator());

    }
    //let newMessage = React.createRef();


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