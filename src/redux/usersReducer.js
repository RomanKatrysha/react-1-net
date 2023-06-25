const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = function (userId){return {type:FOLLOW,userId}};
export const unfollowAC = function (userId){return {type:UNFOLLOW,userId}};
export const setUsersAC = function (users){return {type:SET_USERS,users}};

let initializationState = {
    users : [
        /*{id:1,fotoSrc:'https://avatars.mds.yandex.net/i?id=b3cd67f93bde1864e3d077f30bb84a0fdcad2ddd-9100149-images-thumbs&n=13',
            followed: true, fullName : "Dmitriy",statys : "I'am a boss", location: {siti:"Minsk", country: "Belarus"} },
        {id:2,fotoSrc:'https://avatars.mds.yandex.net/i?id=b3cd67f93bde1864e3d077f30bb84a0fdcad2ddd-9100149-images-thumbs&n=13',
            followed: false, fullName : "Vasy",statys : "I'dddd", location: {siti:"Moskov", country: "Rushia"} },
        {id:3,fotoSrc:'https://avatars.mds.yandex.net/i?id=b3cd67f93bde1864e3d077f30bb84a0fdcad2ddd-9100149-images-thumbs&n=13',
            followed: false, fullName : "Sveta",statys : "I ffff", location: {siti:"FFFFF", country: "Belarus"} },
        {id:4,fotoSrc:'https://avatars.mds.yandex.net/i?id=b3cd67f93bde1864e3d077f30bb84a0fdcad2ddd-9100149-images-thumbs&n=13',
            followed: true, fullName : "Koly",statys : "Innnnn", location: {siti:"KKKK", country: "Belarus"} },
    */],
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
            users: [...state.users,...active.users]
        }
    }
    return state;
}

export default usersReduser;