import classes from './Post.module.css';
import React from "react";

type propsType = {
    message: string
}

const Post = (props: propsType) => {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://repository-images.githubusercontent.com/200409458/ee42d400-ac11-11ea-95fd-641da59b458b" alt="post-photo"/>
                {props.message}
            </div>
        </div>
    )
}
export default Post;
