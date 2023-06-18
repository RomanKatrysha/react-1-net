const CHANGE_FAELD_NEW_MESSAGE = "CHANGE-FAELD-NEW-MESSAGE";
const ADD_MESSADGE = "ADD-MESSADGE";

export function messageChangeActionCreator(text){
    return {type : CHANGE_FAELD_NEW_MESSAGE, text : text}
}
export function addMessageActionCreator(){
    return {type : ADD_MESSADGE}
}
function  messagerReducer(state, action){
    if (action.type === CHANGE_FAELD_NEW_MESSAGE){
        state.contentNewMessage = action.text;

    }
    else if (action.type === ADD_MESSADGE){
        let newMessage =
            {id : 5, message : state.contentNewMessage};
        state.contentNewMessage = "";
        state.messagesData.push(newMessage);

    }
    return state;
}
export default messagerReducer;