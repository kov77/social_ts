import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Vasia</div>
                <div className={classes.dialog}>Petia</div>
                <div className={classes.dialog}>Robert</div>
                <div className={classes.dialog}>Ivan</div>
                <div className={classes.dialog}>Klava</div>
                <div className={classes.dialog}>Nastia</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>How is your studing going?</div>
            </div>
        </div>
    )
}

export default Dialogs;
