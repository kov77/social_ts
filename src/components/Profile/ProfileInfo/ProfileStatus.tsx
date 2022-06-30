import React, {useState} from 'react'


export const ProfileStatus = (props: any) => {
    let[editMode, setEditMode] = useState(false)
    let[status, SetNewStatus] = useState(props.status)

    const onStatusChange = (e: any) => {
        SetNewStatus(e.currentTarget.value)
    }

    const changeStatus = () => {
        setEditMode(true)

    }

    const saveStatus = (e: any) => {
        setEditMode(false)
        props.updateStatus(e.currentTarget.value)

    }

    return <div>
        {
            !editMode ? <div onDoubleClick={ changeStatus}>
                <span>{props.status || 'New status'}</span>
            </div>
                :
            <div>
                <input autoFocus value={status} onChange={e => onStatusChange(e)} onBlur={e => saveStatus(e)}></input>
                <button onClick={saveStatus}>Set status</button>
            </div>
        }
    </div>
}
