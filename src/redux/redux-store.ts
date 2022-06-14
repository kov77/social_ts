import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authorizationReducer} from "./authorization-reducer";
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authorization: authorizationReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>

export default store

// @ts-ignore

window.store = store
