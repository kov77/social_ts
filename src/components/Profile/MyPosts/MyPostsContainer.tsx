import classes from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {actionType, addPostActionCreator, changePostTexttActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";

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



const MyPostsContainer = (props: myPostContainerPropsType) => {
    let state = props.store.getState()
    const addPost = (newValue: string) => {
        props.store.dispatch(addPostActionCreator(newValue))

    }

    const updateNewPostText = (postValue: string) => {
        props.store.dispatch(changePostTexttActionCreator(postValue))
    }

    const removeBtn = () => {
        props.store.dispatch({type: "CHANGE-POST-TEXT", value: ''})
    }
    return (
       <MyPosts addPost = {addPost} updateNewPostText={updateNewPostText} removeBtn={removeBtn} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer;
