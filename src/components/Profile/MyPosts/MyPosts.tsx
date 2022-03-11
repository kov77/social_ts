import classes from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <div>
                <div>
                    <textarea></textarea>
                    <button>ADD POST</button>
                    <button>REMOVE POST</button>
                </div>
            </div>
            <Post message={'Hi, how are you?'} likesCount={15}/>
            <Post message={'It"s my first post!'} likesCount={10}/>

        </div>
    )
}
export default MyPosts;
