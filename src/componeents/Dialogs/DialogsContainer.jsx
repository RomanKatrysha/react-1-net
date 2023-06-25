import React from "react";
import {addMessageActionCreator, messageChangeActionCreator} from "../../redux/messagerReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect, Provider} from "react-redux";



/*const DialogsContainer = function (props) {



    return (
        <Provider.Consumer>
            {
                (store) => {
                    function messageChange(text) {
                        store.dispatch(messageChangeActionCreator(text));
                    }

                    function addMessage() {
                        store.dispatch(addMessageActionCreator());
                    }
                    return <Dialogs dialogesPage={store.getState().dialogesPage} messageChange={messageChange}
                             addMessage={addMessage}/>
                }
            }
        </Provider.Consumer>
    )
}*/
let mapStateToProps = function (state){
    return{
        dialogesPage: state.dialogesPage
    };
};
let mapDispatchToProps = function (dispatch){
    return {
        addMessage: function (){ dispatch(addMessageActionCreator())},
        messageChange: function (text){ dispatch(messageChangeActionCreator(text))}
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;