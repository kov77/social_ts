import {rerenderEntireTree} from "./render";

const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It"s my first post!', likesCount: 12},
            {id: 3, message: 'It"s my second post!', likesCount: 12},
            {id: 4, message: 'It"s my third post!', likesCount: 12},
        ]
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
        ]
    }

}

export const addPost = (postText: string) => {
    state.profilePage.postData.push({id: 5, message: postText, likesCount: 0})
    rerenderEntireTree(state)
}


export default state;
