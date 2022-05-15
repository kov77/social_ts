
const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It"s my first post!', likesCount: 12},
        {id: 3, message: 'It"s my second post!', likesCount: 12},
        {id: 4, message: 'It"s my third post!', likesCount: 12},
    ],
    newPostText: 'hello beaches',
    userProfile: {}
}

type profileReducerType = addPostActionType | achangePostTexttActionType | setUserProfileAction
type addPostActionType = ReturnType<typeof addPostActionCreator>
type achangePostTexttActionType = ReturnType<typeof changePostTexttActionCreator>
type setUserProfileAction = ReturnType<typeof setUserProfile>

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
        default: return state
    }

}

export const addPostActionCreator = (value: string) => ({type: "ADD-POST", value} as const)
export const changePostTexttActionCreator = (postValue: string) => ({type: "CHANGE-POST-TEXT", value: postValue} as const)
export const setUserProfile = (profile: any) => ({type: "SET-USER-PROFILE", profile} as const)
