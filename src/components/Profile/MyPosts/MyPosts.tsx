import classes from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

export type myPostPropsType = {
    postData: postDataArr[]
}

type postDataArr = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props: myPostPropsType) => {



    return (
        <div>
            <div>
                <div>
                    <textarea></textarea>
                    <button>ADD POST</button>
                    <button>REMOVE POST</button>
                </div>
            </div>
            {props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
        </div>
    )
}
export default MyPosts;
