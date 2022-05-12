import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => dispatch(followAC(userId)),
        unfollow: (userId: any) => dispatch(unfollowAC(userId)),
        setUsers: (users: any) => dispatch(setUsersAC(users)),
        setTotalCount: (count: number) => dispatch(setTotalCountAC(count)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)
