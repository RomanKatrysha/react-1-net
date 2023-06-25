const CHANGE_FAELD_MY_POST = "CHANGE-FAELD-MY-POST";
const ADD_POST = "ADD-POST";

let initializationState = {

    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 32},
        {id: 3, message: "fjfjfj", likesCount: 2}
    ],
    contentNewPost: ""

}
export  function onPostChangeActionCreator(text){
    return{type : CHANGE_FAELD_MY_POST, text : text}
}
export  function addPostActionCreator(){
    return {type : ADD_POST}
}
function profileReducer(state = initializationState , action){

    if (action.type === ADD_POST){
        return {
            ...state,
            postsData: [...state.postsData, {id: 4, message: state.contentNewPost, likesCount: 0}],
            contentNewPost: ""
        }


    }
    else if (action.type === CHANGE_FAELD_MY_POST){
        return {
            ...state,
            contentNewPost: action.text
        }

    }

    return state;
}
export default profileReducer;