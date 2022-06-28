import classes from '././Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import { Navigate } from 'react-router-dom';

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
    messageText: string
    addMessage: (text: string) => void
    changeDialogsText: (newValue: string) => void
    isAuth: boolean
}

const Dialogs = (props: dialogsPropsType) => {

    let textFromArea: any = React.createRef();

    const onClickHandler = () => {
        let text = props.messageText
        props.addMessage(text)    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = e.currentTarget.value
        props.changeDialogsText(newValue)
    }


    const dialogsElement = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesElement = props.messages.map(el => <Message key={el.id}  message={el.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>{messagesElement}</div>
            <div className={classes.addMessage}>
                <textarea onChange={onChangeHandler} ref={textFromArea} value={props.messageText}></textarea>
                <button onClick={onClickHandler}>Add text</button>
            </div>
        </div>
    )


}

export default Dialogs;
