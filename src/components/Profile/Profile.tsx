import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer, {myPostContainerPropsType} from "./MyPosts/MyPostsContainer";

const Profile = (props: myPostContainerPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;
