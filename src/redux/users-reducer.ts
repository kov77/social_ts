
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
type userReducerActionType = followType | unfollowType | setUsersType | setCurrentPageType | setTotalCountType | setPreloaderType
type followType = ReturnType<typeof follow>
type unfollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalCountType = ReturnType<typeof setTotalCount>
type setPreloaderType = ReturnType<typeof setPreloader>

export const follow = (userId: number) => ({type: "FOLLOW", userId}as const)
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: usersType) => ({type: "SET_USERS", users} as const)
export const setTotalCount = (count: number) => ({type: "SET_TOTAL_COUNT", count} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setPreloader = (isFetching: boolean) => ({type: "SET_PRELOADER", isFetching} as const)

export const usersReducer = (state = initialState, action: userReducerActionType) => {
    switch (action.type) {
        case "FOLLOW" :
            return {...state, users: [...state.users.map((el: any) => el.id === action.userId ? {...el, folowed: false} : el)]}
        case "UNFOLLOW" :
            return {...state, users: [...state.users.map((el: any)  => el.id === action.userId ? {...el, folowed: true} : el)]}
        case "SET_USERS" :
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.count}
        case "SET_PRELOADER":
            return {...state, isFetching: action.isFetching}
        default: return state
    }

}





export default usersReducer;
