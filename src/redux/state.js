import profileReducer from "./profileReducer";
import messagerReducer from "./messagerReducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 32},
                {id: 3, message: "fjfjfj", likesCount: 2}
            ],
            contentNewPost: ""
        },
        dialogesPage: {
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
    },
    _rerenderTree(){  alert("ff")  },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },

    dispatch(action){
        profileReducer(this._state.profilePage, action);
        messagerReducer(this._state.dialogesPage, action);
        this._rerenderTree(this._state);
    },
};



export default store;