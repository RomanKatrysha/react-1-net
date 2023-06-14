import s from "./ProfileInfo.module.css"
import React from "react";

const ProfileInfo = function (props){
    return(
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=2075fcef5ddbc39ff75baca5b8ba40beb84e01c0-9066514-images-thumbs&n=13'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;