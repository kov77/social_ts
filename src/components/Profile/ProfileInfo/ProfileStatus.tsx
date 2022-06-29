import React, {useState} from 'react'


export const ProfileStatus = (props: any) => {
    let[editMode, setEditMode] = useState(false)

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
                <span>{props.status}</span>
            </div>
                :
            <div>
                <input autoFocus onBlur={e => saveStatus(e)}></input>
                <button onClick={saveStatus}>Set status</button>
            </div>
        }
    </div>
}
