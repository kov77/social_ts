import classes from "./Users.module.css";
import {userType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user_avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return < >
        <div>
            {pages.map((e, index) => <span key={index} onClick={() => props.onPageChanged(e)} className={`${classes.pageNumber} + ${(props.currentPage === e) ? classes.selectedPage : ""} `}>{e}</span>)}

        </div>
        {
            props.users.map((user: userType) => <div className={classes.userWrp} key={user.id}>
                <div className={classes.profileWrp}>
                    <NavLink to={'/profile/' + user.id}><div className={classes.userAvatar}><img src={user.photos.small ? user.photos.small : userPhoto}
                                                                            alt="user's avatar"/></div></NavLink>
                    {user.folowed
                        ? <button onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>}
                </div>
                <div className={classes.userInfoWrp}>
                    <div className={classes.userName}>{user.name}</div>
                    <div className={classes.userStatus}>{user.status}</div>
                    <div className={classes.userLocationWrp}>
                        <div className={classes.userCountry}>{"user.location.country"}</div>
                        <div className={classes.userCity}>{"user.location.city"}</div>
                    </div>
                </div>

            </div>)
        }
    </>
}

export default Users;
