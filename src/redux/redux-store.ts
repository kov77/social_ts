import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authorizationReducer} from "./authorization-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authorization: authorizationReducer
})

const store = createStore(reducers);

export type AppStateType = ReturnType<typeof reducers>

export default store

// @ts-ignore

window.store = store
