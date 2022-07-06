import React from 'react'
import classes from './FormControl.module.css'

export const TextArea = ({input, meta,...props}: any) => {
    return <div>
        <textarea {...input} className={classes.formControl}/>
    </div>
}
