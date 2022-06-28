import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user_avatar.png";
import React from "react";
import { NavLink} from "react-router-dom";

const Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return < >
        <div>
            {pages.map((e, index) => <span key={index} onClick={() => props.onPageChanged(e)}
                                           className={`${classes.pageNumber} + ${(props.currentPage === e) ? classes.selectedPage : ""} `}>{e}</span>)}

        </div>
        {
            props.users.map((user: any) => <div className={classes.userWrp} key={user.id}>
                <div className={classes.profileWrp}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <div className={classes.userAvatar}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} alt="user's avatar"/>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some((id:number) => id === user.id)} onClick={() => {props.follow( user.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id:number) => id === user.id)} onClick={() => {props.unfollow(user.id)}}>Follow</button>}
                    </div>
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
