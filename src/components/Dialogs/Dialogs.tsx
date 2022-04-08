import classes from '././Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import {actionType} from "../../redux/state";

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
    dispatch: (action: actionType) => void
    messageText: string
}

const Dialogs = (props: dialogsPropsType) => {

    let textFromArea: any = React.createRef();

    const onClickHandler = () => {
        props.dispatch({type: "ADD-MESSAGE", value: props.messageText})
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-DIALOGS-TEXT", value: e.currentTarget.value})
    }


    const dialogsElement = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesElement = props.messages.map(el => <Message key={el.id}  message={el.message}/>)

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
