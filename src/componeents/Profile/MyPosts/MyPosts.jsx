import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = function (props){

    let postElement = props.profilePage.postsData.map(elem => <Post message = {elem.message} likescount = {elem.likesCount}/>);

    let newPost = React.createRef();

    function onPostChange(){
        let text =newPost.current.value;
        props.changeFaeldMyPost(text);
    }


    return(
        <div className={s.postBlock}>
            <div>
                <textarea onChange={onPostChange} value={props.profilePage.contentNewPost} ref = {newPost}/>
            </div>
            <div>
                <button onClick={props.addPost} >add post</button>
            </div>
            <div>
                <h3>new post</h3>
            </div>
            <div className={s.posts}>
                {postElement}

            </div>
        </div>
    );
}
export default MyPosts;