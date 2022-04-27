import React from "react";
import {addMessageActionCreator, changeDialogsTexttActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.messageText,
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
