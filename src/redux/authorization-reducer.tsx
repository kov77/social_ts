import {authAPI} from "../api/api";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type initialStateType = typeof initialState;

type authACType = getLoginInfoACType
type getLoginInfoACType = ReturnType<typeof setAutorizationInfoAC>

export const authorizationReducer = (state = initialState, action: authACType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: action.isAuth}

        default: return state
    }
}

export const setAutorizationInfoAC = (id: string, email: string, login: string, isAuth: boolean) => ({type: "SET_USER_DATA", id, email, login, isAuth}as const)
export const getAutorizationInfoTC = () => (dispatch: any) => {
    authAPI.authUser()
        .then(response => {
            console.log(response)
            const {email, id, login} = response.data.data
            if (response.data.resultCode === 0) {
                dispatch(setAutorizationInfoAC(id, email, login, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAutorizationInfoTC())
            }
        })
}
export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAutorizationInfoAC(' ', ' ', ' ', false))
            }
        })
}


