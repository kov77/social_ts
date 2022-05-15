import React from "react";
import {Preloader} from "../../Preloader";
import jobSeekerImg from "../../../assets/images/job_seeker.jpeg";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props: any) => {
    if (!props.userProfile) {
        return <Preloader/>
    } else {
        return <div>
            <div><img
                src="https://www.internetmatters.org/wp-content/uploads/2019/01/Social-media-parental-control-image.png"
                alt="main-image"/></div>
            <div>
                <div className={classes.avatarWrp}><img
                    src={props.userProfile.photos && props.userProfile.photos.large ? props.userProfile.photos.large : "https://image.yaksgames.com/v2/game/1/b/e/1bea6ab4172dc93bdb45ca9cace13b93.png"}
                    alt="avatar"/>
                    {props.userProfile.lookingForAJob && <div className={classes.jobSeekerWrp}><img className={classes.jobSeeker} src={jobSeekerImg} alt="jobSeekerImg"/></div>}
                    {props.userProfile.lookingForAJobDescription && <div className={classes.jobSeekerDescr}>{props.userProfile.lookingForAJobDescription}</div>}
                </div>
                {props.userProfile.fullName && <div className={classes.userFullName}>{props.userProfile.fullName}</div>}
                {props.userProfile.contacts && <div className={classes.contacts}>
                    {props.userProfile.contacts.facebook && <div><a target="_blank" href={props.userProfile.contacts.facebook}><img src= "#" alt="facebook"/></a></div>}
                    {props.userProfile.contacts.website && <div><a target="_blank" href={props.userProfile.contacts.website}><img src= "#" alt="website"/></a></div>}
                    {props.userProfile.contacts.vk && <div><a target="_blank" href={props.userProfile.contacts.vk}><img src= "#" alt="vk"/></a></div>}
                    {props.userProfile.contacts.twitter && <div><a target="_blank" href={props.userProfile.contacts.twitter}><img src= "#" alt="twitter"/></a></div>}
                    {props.userProfile.contacts.instagram && <div><a target="_blank" href={props.userProfile.contacts.instagram}><img src= "#" alt="instagram"/></a></div>}
                    {props.userProfile.contacts.youtube && <div><a target="_blank" href={props.userProfile.contacts.youtube}><img src= "#" alt="youtube"/></a></div>}
                    {props.userProfile.contacts.github && <div><a target="_blank" href={props.userProfile.contacts.github}><img src= "#" alt="github"/></a></div>}
                    {props.userProfile.contacts.mainLink && <div><a  target="_blank"href={props.userProfile.contacts.mainLink}><img src= "#" alt="mainLink"/></a></div>}
                </div>}
                <div>{props.userProfile.aboutMe}</div>
            </div>
        </div>
    }

}

export default ProfileInfo;

