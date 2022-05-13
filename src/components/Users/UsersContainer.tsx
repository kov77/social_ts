import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setPreloaderAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import preloaderImg from "../../assets/images/preloader.gif"

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount )
                this.props.setPreloader(false)


            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setPreloader(false)

            })
    }


    render() {

        return <>
            {this.props.isFetching ? <div><img src={preloaderImg} alt="preloader image"/></div> : null}
            <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: any) => dispatch(followAC(userId)),
        unfollow: (userId: any) => dispatch(unfollowAC(userId)),
        setUsers: (users: any) => dispatch(setUsersAC(users)),
        setTotalCount: (count: number) => dispatch(setTotalCountAC(count)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setPreloader: (isFetching: boolean) => dispatch(setPreloaderAC(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)
