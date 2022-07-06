import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state: any) => {
    return {
        postData: state.profilePage.postData,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newValue: string) => dispatch(addPostActionCreator(newValue)),
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
