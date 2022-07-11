import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAutorizationInfoTC, logout} from "../../redux/authorization-reducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAutorizationInfoTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType) => ({
    authorizationData: state.authorization
})
export default connect(mapStateToProps, {getAutorizationInfoTC, logout})(HeaderContainer)
