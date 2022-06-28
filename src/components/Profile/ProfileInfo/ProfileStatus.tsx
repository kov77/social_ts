export const ProfileStatus = (props: any) => {
    return <div>
        <div>
            <span>{props.status}</span>
        </div>
        <div>
            <input value={props.status}></input>
        </div>

    </div>
}
