import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        let userId = this.props.router.params["*"];
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    userProfile: state.profilePage.userProfile,
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

let ProfileContainerWithRouter =  withRouter(WithAuthRedirect(ProfileContainer))

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter);
