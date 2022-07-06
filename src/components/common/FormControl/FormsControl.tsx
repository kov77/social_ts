import React from 'react'
import classes from './FormControl.module.css'

export const multiAttribute = (attribute: string) => ({input, meta,...props}: any) => {
    const errorConditions = meta.error && meta.touched
    return <div className={errorConditions && classes.formControl + ' ' + classes.error}>
        <div>
            {
                attribute === 'input' ? <input {...input} {...props} /> : <textarea {...input} {...props}/>
            }
        </div>
        {errorConditions && <span className={classes.error}>{meta.error}</span>   }
    </div>
}

