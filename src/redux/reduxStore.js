import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagerReducer from "./messagerReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogesPage: messagerReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;