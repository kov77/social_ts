import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} updateStatus={props.updateStatus} status={props.status}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;
