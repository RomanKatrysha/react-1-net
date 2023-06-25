import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

function mapStateToProps(state){
    return{usersPage : state.usersPage};
}
function mapDispatchToProps(dispatch){
    return{
        follow:function (id){dispatch(followAC(id))},
        unfollow:function (id){dispatch(unfollowAC(id))},
        setUsers:function (users){dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;