
import classes from './../Dialogs.module.css';

type PropsMessageType = {
    message: string
}

const Message = (props: PropsMessageType) => <div className={classes.message}>{props.message}</div>



export default Message;
