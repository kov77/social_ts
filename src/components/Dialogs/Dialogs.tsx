import classes from '././Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
}

const Dialogs = (props: dialogsPropsType) => {


    const dialogsElement = props.dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)
    const messagesElement = props.messages.map(el => <Message message={el.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>{messagesElement}</div>
        </div>
    )
}

export default Dialogs;
