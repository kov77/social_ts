import React from "react";
import classes from './Profile.module.css';
import MyPosts, { myPostPropsType } from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: myPostPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText} changPostText={props.changPostText}/>
        </div>
    )
}

export default Profile;
