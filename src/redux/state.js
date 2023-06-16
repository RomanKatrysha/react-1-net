let rerenderTree;

let state = {
    profilePage : {
        postsData : [
            {id:1, message:"Hi, how are you?", likesCount: 0},
            {id:2, message:"It's my first post", likesCount: 32},
            {id:3, message:"fjfjfj", likesCount: 2}
        ],
        contentNewPost : ""
    },
    dialogesPage : {
        dialogsData : [
            {id: 1, name: "Sveta"},
            {id: 2, name: "Vasy"},
            {id: 3, name: "Pety"},
            {id: 4, name: "Koly"},
        ],
        messagesData : [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "fjffdlsfsj"},
            {id: 4, message: "Yo Yo YO"},
        ]

    }
};

export let addPost = function (){

    let newPost =
        { id : 4 , message : state.profilePage.contentNewPost, likesCount :0};
    state.profilePage.postsData.push(newPost);
    state.profilePage.contentNewPost="";
    rerenderTree(state,addPost,changeFaeldMyPost);

};
export  let  changeFaeldMyPost = function (text){
    state.profilePage.contentNewPost = text;
    rerenderTree(state,addPost,changeFaeldMyPost);
}
export let subscribe = function (observer){
    rerenderTree = observer;
}


export default state;