import s from "./Users.module.css"
import  axios from "axios";
import imegeUser from "./../../assets/images/img.png"

const Users = function (props){
function getUsers(){



    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons=>{
        console.log(respons)
        props.setUsers(respons.data.items)

    });

}

    return(
        <div>
            <button onClick={getUsers}>get users</button>
            {
            props.usersPage.users.map(el=>
                <div key={el.id}>
                    <span>
                        <div><img  src={el.photos.small === null?imegeUser:el.photos.small}/></div>
                        <div>
                            {el.followed ? <button onClick={()=>(props.unfollow(el.id))}>Followe</button>:<button onClick={()=>(props.follow(el.id))}>Unfollowe</button>}

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