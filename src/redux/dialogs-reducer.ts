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
    if(action.type === 'ADD-MESSAGE') {
        {
            state.messages.push({id: state.messages.length + 1, message: state.messageText})
            state.messageText = ''
        }
    } else if(action.type === 'CHANGE-DIALOGS-TEXT') {
        {
            state.messageText = action.value
        }
    }
    return state;
}
