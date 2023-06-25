const CHANGE_FAELD_NEW_MESSAGE = "CHANGE-FAELD-NEW-MESSAGE";
const ADD_MESSADGE = "ADD-MESSADGE";

export function messageChangeActionCreator(text){
    return {type : CHANGE_FAELD_NEW_MESSAGE, text : text}
}
export function addMessageActionCreator(){
    return {type : ADD_MESSADGE}
}

let initializationState = {
    dialogsData: [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Vasy"},
        {id: 3, name: "Pety"},
        {id: 4, name: "Koly"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "fjffdlsfsj"},
        {id: 4, message: "Yo Yo YO"},
    ],
    contentNewMessage : "",
}
function  messagerReducer(state = initializationState, action){


    if (action.type === CHANGE_FAELD_NEW_MESSAGE){
        return {
            ...state,
            contentNewMessage:action.text
        };
    }


    else if (action.type === ADD_MESSADGE){
        return {
            ...state,
            messagesData: [...state.messagesData,{id : 5, message : state.contentNewMessage}],
            contentNewMessage: ""
        }


    }
    return state;
}
export default messagerReducer;