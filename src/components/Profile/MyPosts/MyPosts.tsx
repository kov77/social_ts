import classes from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {actionType, addPostActionCreator, changePostTexttActionCreator} from "../../../redux/store";

export type myPostPropsType = {
    postData: postDataArr[]
    dispatch: (action: actionType) => void
    newPostText: string
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



const MyPosts = (props: myPostPropsType) => {

    const newPostElement: any = React.createRef()

    const onClickBtnHandler = () => {
        props.dispatch(addPostActionCreator(newPostElement.current.value))
        value: newPostElement.current.value = ''

    }

    const newPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postValue = e.currentTarget.value
        props.dispatch(changePostTexttActionCreator(postValue))
    }

    const removeBtnHandler = () => {
        props.dispatch({type: "CHANGE-POST-TEXT", value: ''})
    }

    return (
        <div>
            <div>
                <div>
                    <textarea onChange={newPostTextHandler} ref={newPostElement} value={props.newPostText}></textarea>
                    <button onClick={onClickBtnHandler}>ADD POST</button>
                    <button onClick={removeBtnHandler}>REMOVE POST</button>
                </div>
            </div>
            {props.postData.map((el, index) => <Post key={index} message={el.message} likesCount={el.likesCount}/>)}
        </div>
    )
}
export default MyPosts;
