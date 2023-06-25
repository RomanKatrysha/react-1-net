import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect, Provider} from "react-redux";


/*const MyPostsContainer = function (props) {

    return (
        <Provider.Consumer>{
            function (store)  {
                function onPostChange(text) {
                    store.dispatch(onPostChangeActionCreator(text));
                }

                function addPost() {
                    store.dispatch(addPostActionCreator());
                }


                return <MyPosts onPostChange={onPostChange} addPost={addPost}
                         profilePage={store.getState().profilePage}/>
            }
        }
        </Provider.Consumer>
    );
}*/
let mapStateToProps = (state) =>{
    return{profilePage: state.profilePage}
};
let mapDispatchToProps = (dispatch) =>{
    return{
        onPostChange:(text)=>{dispatch(onPostChangeActionCreator(text));},
        addPost:()=>{dispatch(addPostActionCreator())}
    }
};
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;