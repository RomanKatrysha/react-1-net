import React from "react";
import s from "./Post.module.css"

const Post = function (props){
    return(
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=df463d1640e22948bbc2069a665ee61cc37d7076-8182507-images-thumbs&ref=rim&n=33&w=172&h=150"/>
            <span>{props.message}</span>
            <div>
                <span>like</span> {props.likescount}
            </div>
        </div>
    )
}
export  default Post;