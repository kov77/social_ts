import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

type PropsDialogType = {
    id: string
    name: string
}

type PropsMessageType = {
    message: string
}


const DialogItem = (props: PropsDialogType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:PropsMessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id = '1' name={'Vasia'}/>
                <DialogItem id = '2' name={'Petia'}/>
                <DialogItem id = '3' name={'Robert'}/>
                <DialogItem id = '4' name={'Ivan'}/>
                <DialogItem id = '5' name={'Klava'}/>
                <DialogItem id = '6' name={'Nastia'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How are you?'}/>
                <Message message={'How is your studing going?'}/>
            </div>
        </div>
    )
}

export default Dialogs;
