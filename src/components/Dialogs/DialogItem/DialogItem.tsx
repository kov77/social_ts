import {NavLink} from 'react-router-dom';
import classes from './../Dialogs.module.css'

type PropsDialogType = {
    id: string
    name: string
}

const DialogItem = (props: PropsDialogType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
