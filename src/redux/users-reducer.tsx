import {usersAPI} from "../api/api"

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
    followed: boolean
    photos: photosType
    name: string
    status: string
    location: userLocationType
}
export type usersType = Array<userType>
type userReducerActionType = followType | unfollowType | setUsersType | setCurrentPageType | setTotalCountType | setPreloaderType | toggleFollowingProgressType
type followType = ReturnType<typeof follow>
type unfollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalCountType = ReturnType<typeof setTotalCount>
type setPreloaderType = ReturnType<typeof setPreloader>
type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId}as const)
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: usersType) => ({type: "SET_USERS", users} as const)
export const setTotalCount = (count: number) => ({type: "SET_TOTAL_COUNT", count} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setPreloader = (isFetching: boolean) => ({type: "SET_PRELOADER", isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: "TOGGLE_FOLLOWING_PROGRESS", isFetching, userId} as const)

export const getUsers = (currentPage: number, pageSize: any, pageNumber: number) => {

    return (dispatch: any) => {
               dispatch(setPreloader(true))
                 dispatch(setCurrentPage(pageNumber));
                       usersAPI.getUsers(currentPage, pageSize)
                           .then((data: any) => {
                               dispatch(setUsers(data.items))
                               dispatch(setTotalCount(data.totalCount ))
                               dispatch(setPreloader(false))
                           })
           }
}
export const follow = (userId: number) => {

    return (dispatch: any) => {
               dispatch(toggleFollowingProgress(true, userId))
               usersAPI.unfollowUser(userId).then(data => {
               if(data.resultCode === 0) {

               dispatch(unfollowSuccess(userId));
               }
               dispatch(toggleFollowingProgress(false, userId))

               })
           }
}
export const unfollow = (userId: number) => {

    return (dispatch: any) => {
               dispatch(toggleFollowingProgress(true, userId))
               usersAPI.followUser(userId).then(data => {
               if(data.resultCode === 0) {

               dispatch(followSuccess(userId));
               }
               dispatch(toggleFollowingProgress(false, userId))

               })
           }
}



export const usersReducer = (state = initialState, action: any) => {
    switch (action.type
        ) {
        case "FOLLOW" :
            return {...state, users: [...state.users.map((el: any) => el.id === action.userId ? {...el, followed: true} : el)]}
        case "UNFOLLOW" :
            return {...state, users: [...state.users.map((el: any) => el.id === action.userId ? {...el, followed: false} : el)]}
        case "SET_USERS" :
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.count}
        case "SET_PRELOADER":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_FOLLOWING_PROGRESS":
            return {...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId) }
        default: return state
    }

}

export default usersReducer;
