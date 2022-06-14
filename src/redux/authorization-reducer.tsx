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
            return {...state, ...action.data, isAuth: true}

        default: return state
    }
}

export const setAutorizationInfoAC = (data: initialStateType) => ({type: "SET_USER_DATA", data}as const)
export const getAutorizationInfoTC = () => (dispatch: any) => {
    authAPI.authUser()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAutorizationInfoAC(response.data.data))
            }
        })
}


