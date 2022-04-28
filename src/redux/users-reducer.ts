
const initialState = {
    users: [
        // {id: 1, folowed: false, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'Dmitriy', status: 'I am the boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, folowed: true, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'Ivan', status: 'I am the poc', location: {city: 'Moscow', country: 'russia'}},
        // {id: 3, folowed: false, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'Taras', status: 'I am the man', location: {city: 'Kyiv', country: 'Ukraine'}},
        // {id: 4, folowed: true, img: 'https://styles.redditmedia.com/t5_2qi0m/styles/communityIcon_h01scqdubtb41.png', name: 'James', status: 'I am the boy', location: {city: 'San Diego', country: 'USA'}},
    ]
}
type userLocationType = {
    city: string
    country: string
}

export type userType = {
    id: number
    folowed: boolean
    img: string
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
