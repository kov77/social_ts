import classes from '././Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {ChangeEvent} from "react";
import { Navigate } from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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

const DialogForm = (props:InjectedFormProps) => {
    return <form onSubmit={props.handleSubmit} className={classes.addMessage}>
        <Field component={"textarea"} name={"message"} ></Field>

        <button>Add text</button>
    </form>
}

const DialogReduxForm = reduxForm({form: "dialog"})(DialogForm)


const Dialogs = (props: dialogsPropsType) => {

    const onSubmit = (data: any) => {
        props.addMessage(data.message)
    }

    const dialogsElement = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    const messagesElement = props.messages.map(el => <Message key={el.id}  message={el.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>{messagesElement}</div>
            <DialogReduxForm onSubmit={onSubmit}/>
        </div>
    )


}

export default Dialogs;
