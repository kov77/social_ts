import classes from './MyPosts.module.css';
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";


export type myPostPropsType = {
    postData: postDataArr[]
    addPost: () => void
    newPostText: string
    changPostText: (value: string) => void
}

type postDataArr = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props: myPostPropsType) => {

    const newPostElement: any = React.createRef()

    const onClickBtnHandler = () => {
        props.addPost()
        newPostElement.current.value= ''
    }

    const newPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postValue = e.currentTarget.value
        props.changPostText(postValue)
    }

    return (
        <div>
            <div>
                <div>
                    <textarea onChange={newPostTextHandler} ref={newPostElement} value={props.newPostText}></textarea>
                    <button onClick={onClickBtnHandler}>ADD POST</button>
                    <button>REMOVE POST</button>
                </div>
            </div>
            {props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
        </div>
    )
}
export default MyPosts;
