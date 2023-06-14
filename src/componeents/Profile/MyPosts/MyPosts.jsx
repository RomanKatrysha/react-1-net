import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = function (props){

    let postElement = props.postsData.map(elem => <Post message = {elem.message} likescount = {elem.likesCount}/>);


    return(
        <div className={s.postBlock}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
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