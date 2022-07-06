import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { AppStateType } from "../../redux/redux-store";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (text: string) => dispatch(addMessageActionCreator(text)),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
