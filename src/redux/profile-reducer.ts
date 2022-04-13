import { reducerType} from "./state";

export const profileReducer: reducerType = (state, action) => {
    if(action.type === 'ADD-POST') {
        {
            state.profilePage.postData.push({id: state.dialogsPage.messages.length + 1, message: state.profilePage.newPostText, likesCount: 0})
            state.profilePage.newPostText = ''
        }
    } else if(action.type === 'ADD-MESSAGE') {
        {
            state.dialogsPage.messages.push({id: state.dialogsPage.messages.length + 1, message: state.dialogsPage.messageText})
            state.dialogsPage.messageText = ''
        }
    }
    return state;
}
