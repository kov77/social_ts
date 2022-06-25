import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, changeDialogsTexttActionCreator} from "../../redux/dialogs-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { AppStateType } from "../../redux/redux-store";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType) => {
    debugger
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.messageText,
        // isAuth: state.authorization.isAuth
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (text: string) => dispatch(addMessageActionCreator(text)),
        changeDialogsText: (newValue: string) => dispatch(changeDialogsTexttActionCreator(newValue))
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
