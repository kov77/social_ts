import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalCount,
    setUsers,
    unfollow,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../Preloader";
import {usersAPI} from "../../api/api"

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setPreloader(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount )
                this.props.setPreloader(false)


            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.pageSize )
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setPreloader(false)

            })
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalCount, setCurrentPage, setPreloader, toggleFollowingProgress}) (UsersContainer)
