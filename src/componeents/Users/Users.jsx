import s from "./Users.module.css"
import  axios from "axios";
import imegeUser from "./../../assets/images/img.png"
import React from "react";

const Users = function (props){




    // console.log(this)
    let pages = Math.ceil(props.totalCount/props.pageSize);
    let page = [];
    // console.log(page)
    for(let i = 1; i <= pages; i++){
        page.push(i);
    }
    let thisCurrentPage = props.currentPage
    let page2 = page.filter(function (p){return thisCurrentPage-3<=p && 3+thisCurrentPage>=p})
    //console.log(page2,thisCurrentPage)
    return(

        <div>
            <div>
                {page2.map(p=>{
                    return <span className={props.currentPage === p ? s.selektedPage:""} key={p}
                                 onClick={()=>{props.selectPage(p)}}
                    >{p}</span>
                })}

            </div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                    <span>
                        <div><img src={el.photos.small === null ? imegeUser : el.photos.small}/></div>
                        <div>
                            {el.followed ? <button onClick={() => (props.unfollow(el.id))}>Followe</button> :
                                <button onClick={() => (props.follow(el.id))}>Unfollowe</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{el.name}</div><div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.country"}</div><div>{"el.location.siti"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    );
}
export default Users;