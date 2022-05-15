import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../Preloader";

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
            {this.props.isFetching ? <Preloader/> : null}
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalCount, setCurrentPage, setPreloader}) (UsersContainer)
