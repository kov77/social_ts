import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, changePostTexttActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state: any) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newValue: string) => dispatch(addPostActionCreator(newValue)),
        updateNewPostText: (postValue: string) => dispatch(changePostTexttActionCreator(postValue)),
        removeBtn: dispatch(changePostTexttActionCreator(''))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
