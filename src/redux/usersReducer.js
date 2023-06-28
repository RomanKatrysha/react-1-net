const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export const followAC = function (userId){return {type:FOLLOW,userId}};
export const unfollowAC = function (userId){return {type:UNFOLLOW,userId}};
export const setUsersAC = function (users){return {type:SET_USERS,users}};
export const settotalCountAC = function (totalCount){return{type:SET_TOTAL_COUNT,totalCount}};
export  const setCurrentPageAC = function (currentPage){return{type:SET_CURRENT_PAGE,currentPage}}

let initializationState = {
    users : [],
    currentPage : 1,
    pageSize : 4,
    totalCount:0

};
let usersReduser = function (state = initializationState,active){
    if(active.type === "FOLLOW"){
        return {
            ...state,
            users: state.users.map(el => {
                if(el.id === active.userId){
                    return {
                        ...el,
                        followed : true
                    };
                }
                return el;
            })
        }
    }
    else if (active.type === "UNFOLLOW"){
        return {
            ...state,
            users: state.users.map(el=>{
                if(active.userId === el.id) return {...el,followed: false}
                return el;
            }),
        };
    }
    else if (active.type === "SET_USERS"){
        return {
            ...state,
            users: [...active.users]
        }
    }
    else if (active.type === "SET_TOTAL_COUNT"){
        return {
            ...state,
            totalCount: active.totalCount,
        }
    }
    else if (active.type === "SET_CURRENT_PAGE"){
        return {
            ...state,
            currentPage : Number(active.currentPage),
        }
    }
    return state;
}

export default usersReduser;