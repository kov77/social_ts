let _callSubscriber = () => {}
export type actionType = {
    type: 'ADD-POST' | 'ADD-MESSAGE' | 'CHANGE-POST-TEXT' | 'CHANGE-DIALOGS-TEXT'
    value: string | ''
}

export const addPostActionCreator = (value: string): actionType => ({type: "ADD-POST", value})
export const changePostTexttActionCreator = (postValue: string): actionType => ({type: "CHANGE-POST-TEXT", value: postValue})
export const addMessageActionCreator = (text: string): actionType => ({type: "ADD-MESSAGE", value: text})
export const changeDialogsTexttActionCreator = (newValue: string): actionType => ({type: "CHANGE-DIALOGS-TEXT", value: newValue})

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It"s my first post!', likesCount: 12},
                {id: 3, message: 'It"s my second post!', likesCount: 12},
                {id: 4, message: 'It"s my third post!', likesCount: 12},
            ],
            newPostText: 'hello beaches'
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Vasia'},
                {id: '2', name: 'Petia'},
                {id: '3', name: 'Robert'},
                {id: '4', name: 'Ivan'},
                {id: '5', name: 'Klava'},
                {id: '6', name: 'Nastia'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'How is your studing going?'}
            ],
            messageText: ''
        }

    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        _callSubscriber = observer
    },

    dispatch(action: actionType) {
        if(action.type === 'ADD-POST') {
            {
                this._state.profilePage.postData.push({id: this._state.dialogsPage.messages.length + 1, message: this._state.profilePage.newPostText, likesCount: 0})
                this._state.profilePage.newPostText = ''
                _callSubscriber()
            }
        } else if(action.type === 'ADD-MESSAGE') {
            {
                this._state.dialogsPage.messages.push({id: this._state.dialogsPage.messages.length + 1, message: this._state.dialogsPage.messageText})
                this._state.dialogsPage.messageText = ''
                _callSubscriber()
            }
        } else if(action.type === 'CHANGE-POST-TEXT') {
            {
                this._state.profilePage.newPostText = action.value;
                _callSubscriber()
            }
        } else if(action.type === 'CHANGE-DIALOGS-TEXT') {
            {
                this._state.dialogsPage.messageText = action.value
                _callSubscriber()
            }
        }

    },




}

export default store;
