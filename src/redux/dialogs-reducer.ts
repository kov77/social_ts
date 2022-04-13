import { actionType, reducerType} from "./state";

export const dialogsReducer: reducerType = (state, action: actionType) => {
    if(action.type === 'CHANGE-POST-TEXT') {
        {
            state.profilePage.newPostText = action.value;
        }
    } else if(action.type === 'CHANGE-DIALOGS-TEXT') {
        {
            state.dialogsPage.messageText = action.value
        }
    }
    return state;
}
