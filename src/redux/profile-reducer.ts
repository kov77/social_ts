import { reducerType} from "./store";

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It"s my first post!', likesCount: 12},
        {id: 3, message: 'It"s my second post!', likesCount: 12},
        {id: 4, message: 'It"s my third post!', likesCount: 12},
    ],
    newPostText: 'hello beaches'
}

export const profileReducer: reducerType = (state = initialState, action) => {
    if(action.type === 'ADD-POST') {
        {
            state.postData.push({id: state.postData.length + 1, message: state.newPostText, likesCount: 0})
            state.newPostText = ''
        }
    } else if(action.type === 'CHANGE-POST-TEXT') {
        {
            state.newPostText = action.value;
        }
    }
    return state;
}
