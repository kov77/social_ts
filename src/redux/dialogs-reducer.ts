import { actionType, reducerType} from "./store";

const initialState = {
    dialogs: [
        {id: '1', name: 'Vasia'},
        {id: '2', name: 'Petia'},
        {id: '3', name: 'Robert'},
        {id: '4', name: 'Ivan'},
        {id: '5', name: 'Klava'},
        {id: '6', name: 'Nastia'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is your studing going?'}
    ],
    messageText: ''
}

export const dialogsReducer: reducerType = (state = initialState, action: actionType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let message = {id: state.messages.length + 1, message: state.messageText}
            return {...state, messages: [...state.messages, message], messageText: ''}
        }
        case "CHANGE-DIALOGS-TEXT": {
            return {...state, messageText: action.value}
        }
        default: return state
    }
}
