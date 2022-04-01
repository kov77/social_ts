import classes from '././Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import {addMessage, changeDialogsText} from "../../redux/state";

type dialogsArr = {
    id: string
    name:string
}

type messagesArr = {
    id: number
    message: string
}

export type dialogsPropsType = {
    dialogs: dialogsArr[]
    messages: messagesArr[]
    addMessage: () => void
    changeDialogsText: (value: string) => void
    messageText: string
}

const Dialogs = (props: dialogsPropsType) => {

    let textFromArea: any = React.createRef();

    const onClickHandler = () => {
        addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeDialogsText(e.currentTarget.value)
    }


    const dialogsElement = props.dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)
    const messagesElement = props.messages.map(el => <Message message={el.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>{messagesElement}</div>
            <textarea onChange={onChangeHandler} ref={textFromArea} value={props.messageText}></textarea>
            <button onClick={onClickHandler}>Add text</button>
        </div>
    )
}

export default Dialogs;
