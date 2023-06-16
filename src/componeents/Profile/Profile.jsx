import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeFaeldMyPost} from "../../redux/state";

const Profile = function (props) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost = {props.addPost} changeFaeldMyPost={props.changeFaeldMyPost}/>
        </div>
    );
}
export default Profile;