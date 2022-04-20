import React from "react";
import {addMessageActionCreator, changeDialogsTexttActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";


export type dialogsContainerPropsType = {
    store: any
}

const DialogsContainer = (props: dialogsContainerPropsType) => {
    let state = props.store.getState()

    const addMessage = (text: string) => {
        props.store.dispatch(addMessageActionCreator(text))
    }

    const changeDialogsText = (newValue: string) => {
        props.store.dispatch(changeDialogsTexttActionCreator(newValue))

    }

    return (
        <Dialogs addMessage={addMessage} changeDialogsText={changeDialogsText} dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages} messageText={state.dialogsPage.messageText}/>
    )
}

export default DialogsContainer;
