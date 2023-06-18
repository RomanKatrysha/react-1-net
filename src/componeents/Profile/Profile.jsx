import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeFaeldMyPost} from "../../redux/state";

const Profile = function (props) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state = {props.state} dispatch={props.dispatch}/>
        </div>
    );
}
export default Profile;