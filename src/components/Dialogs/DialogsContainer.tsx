import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, changeDialogsTexttActionCreator} from "../../redux/dialogs-reducer";

const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.messageText,
        isAuth: state.authorization.isAuth
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (text: string) => dispatch(addMessageActionCreator(text)),
        changeDialogsText: (newValue: string) => dispatch(changeDialogsTexttActionCreator(newValue))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
