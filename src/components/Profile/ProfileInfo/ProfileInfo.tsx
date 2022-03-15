import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img
                src="https://www.internetmatters.org/wp-content/uploads/2019/01/Social-media-parental-control-image.png"
                alt="main-image"/></div>
            <div>
                <div><img src="https://image.yaksgames.com/v2/game/1/b/e/1bea6ab4172dc93bdb45ca9cace13b93.png"
                          alt="avatar"/></div>
                <div>Description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
