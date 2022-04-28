import {userType} from "../../redux/users-reducer";
import classes from './Users.module.css'
const Users = (props: any) => {
    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, folowed: false, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'Dmitriy', status: 'I am the boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, folowed: true, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'Ivan', status: 'I am the poc', location: {city: 'Moscow', country: 'russia'}},
            {id: 3, folowed: false, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'Taras', status: 'I am the man', location: {city: 'Kyiv', country: 'Ukraine'}},
            {id: 4, folowed: true, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'James', status: 'I am the boy', location: {city: 'San Diego', country: 'USA'}},
        ])
    }

    return <div>
        {
            props.users.map((user: userType) => <div className = {classes.userWrp} key={user.id}>
                <div className={classes.profileWrp}>
                    <div className={classes.userAvatar}><img src = {user.img} alt="user's avatar"/></div>
                    {user.folowed
                        ? <button onClick={() => {props.follow(user.id)}}>Follow</button>
                        : <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>}
                </div>
                <div className={classes.userInfoWrp}>
                    <div className={classes.userName}>{user.name}</div>
                    <div className={classes.userStatus}>{user.status}</div>
                    <div className={classes.userLocationWrp}>
                        <div className={classes.userCountry}>{user.location.country}</div>
                        <div className={classes.userCity}>{user.location.city}</div>
                    </div>
                </div>

            </div>)
        }
    </div>
}

export default Users
