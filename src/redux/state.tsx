let rerenderEntireTree: () => void;

const state = {
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

}


export const addPost = () => {
    state.profilePage.postData.push({id: state.dialogsPage.messages.length + 1, message: state.profilePage.newPostText, likesCount: 0})
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const addMessage = () => {
    state.dialogsPage.messages.push({id: state.dialogsPage.messages.length + 1, message: state.dialogsPage.messageText})
    state.dialogsPage.messageText = ''
    rerenderEntireTree()
}

export const changPostText = (value: string) => {
    state.profilePage.newPostText = value;
    rerenderEntireTree()
}

export const changeDialogsText = (value: string) => {
    state.dialogsPage.messageText = value
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state;
