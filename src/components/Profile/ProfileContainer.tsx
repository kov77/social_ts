import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        let userId = this.props.router.params["*"];

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
})



// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
) (ProfileContainer)
