import React from "react";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAutorizationInfoAC} from "../../redux/authorization-reducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {

                    this.props.setAutorizationInfoAC(response.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType) => ({
    authorizationData: state.authorization
})
export default connect(mapStateToProps, {setAutorizationInfoAC})(HeaderContainer)
