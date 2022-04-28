import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => dispatch(followAC(userId)),
        unfollow: (userId: any) => dispatch(unfollowAC(userId)),
        setUsers: (users: any) => dispatch(setUsersAC(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)
