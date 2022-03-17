import React from "react";
import classes from './Profile.module.css';
import MyPosts, { myPostPropsType } from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: myPostPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;
