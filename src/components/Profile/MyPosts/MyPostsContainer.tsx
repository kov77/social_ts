import classes from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {actionType, addPostActionCreator, changePostTexttActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

export type myPostContainerPropsType = {
    store: any
}

// export type myPostPropsType = {
//     postData: postDataArr[]
//     addPost: () => void
//     newPostText: string
//     changPostText: (value: string) => void
// }

type postDataArr = {
    id: number
    message: string
    likesCount: number
}




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
