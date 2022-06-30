import {usersAPI} from "../api/api";

const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It"s my first post!', likesCount: 12},
        {id: 3, message: 'It"s my second post!', likesCount: 12},
        {id: 4, message: 'It"s my third post!', likesCount: 12},
    ],
    newPostText: 'hello beaches',
    userProfile: {},
    status: ''
}

type profileReducerType = addPostActionType | achangePostTexttActionType | setUserProfileAction | setStatusAction
type addPostActionType = ReturnType<typeof addPostActionCreator>
type achangePostTexttActionType = ReturnType<typeof changePostTexttActionCreator>
type setUserProfileAction = ReturnType<typeof setUserProfile>
type setStatusAction = ReturnType<typeof setStatus>

export const profileReducer = (state = initialState, action: profileReducerType ) => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: state.postData.length + 1, message: state.newPostText, likesCount: 0}
            return {...state, postData: [...state.postData, newPost], newPostText: ''}
        }
        case "CHANGE-POST-TEXT": {
            return {...state, newPostText: action.value}
        }
        case "SET-USER-PROFILE":
            return {...state, userProfile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default: return state
    }

}

export const addPostActionCreator = (value: string) => ({type: "ADD-POST", value} as const)
export const changePostTexttActionCreator = (postValue: string) => ({type: "CHANGE-POST-TEXT", value: postValue} as const)
export const setUserProfile = (profile: any) => ({type: "SET-USER-PROFILE", profile} as const)
export const getUserProfile = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const setStatus = (status: any) =>  ({type: "SET-STATUS", status} as const)
export const getStatus = (userId: string) => (dispatch: any) => {
    usersAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    usersAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
