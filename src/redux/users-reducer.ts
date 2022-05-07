
const initialState = {
    users: []
}
type userLocationType = {
    city: string
    country: string
}

type photosType = {
        small: string
        large: string
}

export type userType = {
    id: number
    folowed: boolean
    photos: photosType
    name: string
    status: string
    location: userLocationType
}
export type usersType = Array<userType>
type userReducerActionType = followType | unfollowType | setUsersType
type followType = ReturnType<typeof followAC>
type unfollowType = ReturnType<typeof unfollowAC>
type setUsersType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: "FOLLOW", userId}as const)
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: usersType) => ({type: "SET_USERS", users} as const)

export const usersReducer = (state = initialState, action: userReducerActionType) => {
    switch (action.type) {
        case "FOLLOW" :
            return {...state, users: [...state.users.map((el: any) => el.id === action.userId ? {...el, folowed: false} : el)]}
        case "UNFOLLOW" :
            return {...state, users: [...state.users.map((el: any)  => el.id === action.userId ? {...el, folowed: true} : el)]}
        case "SET_USERS" :
            return {...state, users: [...state.users, ...action.users]}
        default: return state
    }

}





export default usersReducer;
