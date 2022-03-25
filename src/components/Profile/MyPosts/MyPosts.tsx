import classes from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";


export type myPostPropsType = {
    postData: postDataArr[]
    addPost: (postText: string) => void
}

type postDataArr = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props: myPostPropsType) => {

    const newPostElement: any = React.createRef()

    const onClickBtnHandler = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value= ''
    }

    return (
        <div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={onClickBtnHandler}>ADD POST</button>
                    <button>REMOVE POST</button>
                </div>
            </div>
            {props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
        </div>
    )
}
export default MyPosts;
