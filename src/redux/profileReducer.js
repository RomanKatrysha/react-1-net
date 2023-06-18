const CHANGE_FAELD_MY_POST = "CHANGE-FAELD-MY-POST";
const ADD_POST = "ADD-POST";

export  function onPostChangeActionCreator(text){
    return{type : CHANGE_FAELD_MY_POST, text : text}
}
export  function addPostActionCreator(){
    return {type : ADD_POST}
}
function profileReducer(state , action){
    if (action.type === ADD_POST){
        let newPost =
            {id: 4, message: state.contentNewPost, likesCount: 0};
        state.postsData.push(newPost);
        state.contentNewPost = "";
    }
    else if (action.type === CHANGE_FAELD_MY_POST){
        state.contentNewPost = action.text;

    }

    return state;
}
export default profileReducer;