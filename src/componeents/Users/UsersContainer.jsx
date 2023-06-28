import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    settotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReducer";

import React from "react";
import axios from "axios";

class UsersClass extends React.Component {


    componentDidMount() {
        //alert("1")
        //this.getUsers()
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(function (respons)  {
            //console.log(respons)
            this.props.setUsers(respons.data.items);
            this.props.settotalCount(respons.data.totalCount);

        }.bind(this));

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //alert("2")
    }


    selectPage(pageNumber){
        //console.log(e.target.innerHTML)
        //console.log(this)

        this.props.setCurrentPage(pageNumber);
        //this.getUsers()
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(function (respons)  {
            //console.log(respons)
            this.props.setUsers(respons.data.items);
            // this.props.settotalCount(respons.data.totalCount);

        }.bind(this));
    }
    render() {

        return (
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   selectPage={this.selectPage.bind(this)}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        );
    }
}
function mapStateToProps(state){
    return{
        usersPage : state.usersPage,
        currentPage : state.usersPage.currentPage,
        pageSize : state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount
    };
}
function mapDispatchToProps(dispatch){
    return{
        follow:function (id){dispatch(followAC(id))},
        unfollow:function (id){dispatch(unfollowAC(id))},
        setUsers:function (users){dispatch(setUsersAC(users))},
        settotalCount:function (totalCount){dispatch(settotalCountAC(totalCount))},
        setCurrentPage:function (currentPage){dispatch(setCurrentPageAC(currentPage))}
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass);

export default UsersContainer;