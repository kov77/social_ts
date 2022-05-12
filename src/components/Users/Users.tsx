import {userType} from "../../redux/users-reducer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user_avatar.png"
import React from "react";

class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount )
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(e => <span onClick={() => this.onPageChanged(e)} className={`${classes.pageNumber} + ${(this.props.currentPage === e) ? classes.selectedPage : ""} `}>{e}</span>)}

            </div>
            {
                this.props.users.map((user: userType) => <div className={classes.userWrp} key={user.id}>
                    <div className={classes.profileWrp}>
                        <div className={classes.userAvatar}><img src={user.photos.small ? user.photos.small : userPhoto}
                                                                 alt="user's avatar"/></div>
                        {user.folowed
                            ? <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.unfollow(user.id)
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
        </div>
    }
}

export default Users
