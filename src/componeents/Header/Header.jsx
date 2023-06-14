import React from "react";
import s from "./Header.module.css";

const  Header = function (){
    return(
        <header className={s.header}>
            <img  src='https://avatars.mds.yandex.net/i?id=2075fcef5ddbc39ff75baca5b8ba40beb84e01c0-9066514-images-thumbs&n=13'/>
        </header>
    );
}
export  default  Header;